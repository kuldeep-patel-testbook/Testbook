const express = require('express');
const { body, validationResult, query } = require('express-validator');
const Patient = require('../models/Patient');
const { protect, checkPermission } = require('../middleware/auth');
const { uploadMultiple, processUploadedFiles } = require('../middleware/upload');

const router = express.Router();

// @desc    Register new patient
// @route   POST /api/patients
// @access  Private (with permission)
router.post('/', 
  protect, 
  checkPermission('patients', 'create'),
  uploadMultiple('patientDocuments', 5),
  processUploadedFiles,
  [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('dateOfBirth').isISO8601().withMessage('Valid date of birth is required'),
    body('gender').isIn(['male', 'female', 'other']).withMessage('Gender must be male, female, or other'),
    body('contactInfo.phone').notEmpty().withMessage('Phone number is required'),
    body('address.street').notEmpty().withMessage('Street address is required'),
    body('address.city').notEmpty().withMessage('City is required'),
    body('address.state').notEmpty().withMessage('State is required'),
    body('address.zipCode').matches(/^\d{5}(-\d{4})?$/).withMessage('Valid ZIP code is required'),
    body('emergencyContact.name').notEmpty().withMessage('Emergency contact name is required'),
    body('emergencyContact.relationship').notEmpty().withMessage('Emergency contact relationship is required'),
    body('emergencyContact.phone').notEmpty().withMessage('Emergency contact phone is required')
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array()
        });
      }

      // Check for duplicate patients by phone or email
      const { contactInfo } = req.body;
      const existingPatient = await Patient.findOne({
        $or: [
          { 'contactInfo.phone': contactInfo.phone },
          { 'contactInfo.email': contactInfo.email }
        ].filter(Boolean)
      });

      if (existingPatient) {
        return res.status(400).json({
          success: false,
          message: 'Patient with this phone number or email already exists',
          existingPatient: {
            patientId: existingPatient.patientId,
            fullName: existingPatient.fullName
          }
        });
      }

      // Process uploaded documents
      const documents = [];
      if (req.processedFiles && req.processedFiles.length > 0) {
        req.processedFiles.forEach(file => {
          documents.push({
            filename: file.filename,
            originalName: file.originalName,
            mimetype: file.mimetype,
            size: file.size,
            documentType: req.body.documentType || 'other',
            description: req.body.documentDescription || ''
          });
        });
      }

      // Create patient
      const patientData = {
        ...req.body,
        documents,
        registeredBy: req.user.id
      };

      const patient = new Patient(patientData);
      await patient.save();

      // Populate references for response
      await patient.populate([
        { path: 'primaryPhysician', select: 'personalInfo.firstName personalInfo.lastName specializations' },
        { path: 'registeredBy', select: 'firstName lastName role' }
      ]);

      res.status(201).json({
        success: true,
        message: 'Patient registered successfully',
        patient: {
          id: patient._id,
          patientId: patient.patientId,
          fullName: patient.fullName,
          age: patient.age,
          gender: patient.gender,
          contactInfo: patient.contactInfo,
          address: patient.address,
          emergencyContact: patient.emergencyContact,
          primaryPhysician: patient.primaryPhysician,
          registrationDate: patient.registrationDate,
          status: patient.status
        }
      });

    } catch (error) {
      console.error('Patient registration error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error during patient registration'
      });
    }
  }
);

// @desc    Search patients
// @route   GET /api/patients/search
// @access  Private (with permission)
router.get('/search',
  protect,
  checkPermission('patients', 'read'),
  [
    query('q').optional().isLength({ min: 1 }).withMessage('Search query must not be empty'),
    query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
    query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array()
        });
      }

      const { 
        q, 
        page = 1, 
        limit = 10, 
        status = 'active',
        gender,
        ageMin,
        ageMax,
        registrationDateFrom,
        registrationDateTo
      } = req.query;

      // Build search query
      const searchQuery = { status };

      if (q) {
        searchQuery.$or = [
          { patientId: new RegExp(q, 'i') },
          { firstName: new RegExp(q, 'i') },
          { lastName: new RegExp(q, 'i') },
          { 'contactInfo.phone': new RegExp(q.replace(/\D/g, ''), 'i') },
          { 'contactInfo.email': new RegExp(q, 'i') }
        ];
      }

      if (gender) {
        searchQuery.gender = gender;
      }

      if (registrationDateFrom || registrationDateTo) {
        searchQuery.registrationDate = {};
        if (registrationDateFrom) {
          searchQuery.registrationDate.$gte = new Date(registrationDateFrom);
        }
        if (registrationDateTo) {
          searchQuery.registrationDate.$lte = new Date(registrationDateTo);
        }
      }

      // Execute search with pagination
      const patients = await Patient.find(searchQuery)
        .populate('primaryPhysician', 'personalInfo.firstName personalInfo.lastName specializations.specialty')
        .select('patientId firstName lastName middleName dateOfBirth gender contactInfo address status registrationDate lastVisitDate')
        .sort({ registrationDate: -1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);

      // Filter by age if specified
      let filteredPatients = patients;
      if (ageMin || ageMax) {
        filteredPatients = patients.filter(patient => {
          const age = patient.age;
          if (ageMin && age < parseInt(ageMin)) return false;
          if (ageMax && age > parseInt(ageMax)) return false;
          return true;
        });
      }

      const total = await Patient.countDocuments(searchQuery);

      // Format response
      const formattedPatients = filteredPatients.map(patient => ({
        id: patient._id,
        patientId: patient.patientId,
        fullName: patient.fullName,
        age: patient.age,
        gender: patient.gender,
        phone: patient.contactInfo.phone,
        email: patient.contactInfo.email,
        address: `${patient.address.city}, ${patient.address.state}`,
        primaryPhysician: patient.primaryPhysician ? patient.primaryPhysician.fullName : null,
        registrationDate: patient.registrationDate,
        lastVisitDate: patient.lastVisitDate,
        status: patient.status
      }));

      res.json({
        success: true,
        patients: formattedPatients,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      });

    } catch (error) {
      console.error('Patient search error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error during patient search'
      });
    }
  }
);

// @desc    Get patient by ID
// @route   GET /api/patients/:id
// @access  Private (with permission)
router.get('/:id',
  protect,
  checkPermission('patients', 'read'),
  async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id)
        .populate('primaryPhysician', 'personalInfo contactInfo specializations affiliations')
        .populate('registeredBy', 'firstName lastName role department');

      if (!patient) {
        return res.status(404).json({
          success: false,
          message: 'Patient not found'
        });
      }

      res.json({
        success: true,
        patient
      });

    } catch (error) {
      console.error('Get patient error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching patient'
      });
    }
  }
);

// @desc    Update patient
// @route   PUT /api/patients/:id
// @access  Private (with permission)
router.put('/:id',
  protect,
  checkPermission('patients', 'update'),
  uploadMultiple('patientDocuments', 5),
  processUploadedFiles,
  [
    body('firstName').optional().notEmpty().withMessage('First name cannot be empty'),
    body('lastName').optional().notEmpty().withMessage('Last name cannot be empty'),
    body('dateOfBirth').optional().isISO8601().withMessage('Valid date of birth is required'),
    body('gender').optional().isIn(['male', 'female', 'other']).withMessage('Gender must be male, female, or other'),
    body('contactInfo.phone').optional().notEmpty().withMessage('Phone number cannot be empty'),
    body('address.zipCode').optional().matches(/^\d{5}(-\d{4})?$/).withMessage('Valid ZIP code is required')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array()
        });
      }

      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        return res.status(404).json({
          success: false,
          message: 'Patient not found'
        });
      }

      // Check for duplicate contact info if being updated
      if (req.body.contactInfo) {
        const { phone, email } = req.body.contactInfo;
        if (phone || email) {
          const duplicateQuery = {
            _id: { $ne: req.params.id },
            $or: []
          };

          if (phone) duplicateQuery.$or.push({ 'contactInfo.phone': phone });
          if (email) duplicateQuery.$or.push({ 'contactInfo.email': email });

          if (duplicateQuery.$or.length > 0) {
            const duplicatePatient = await Patient.findOne(duplicateQuery);
            if (duplicatePatient) {
              return res.status(400).json({
                success: false,
                message: 'Another patient with this phone number or email already exists'
              });
            }
          }
        }
      }

      // Process new uploaded documents
      if (req.processedFiles && req.processedFiles.length > 0) {
        const newDocuments = req.processedFiles.map(file => ({
          filename: file.filename,
          originalName: file.originalName,
          mimetype: file.mimetype,
          size: file.size,
          documentType: req.body.documentType || 'other',
          description: req.body.documentDescription || ''
        }));

        req.body.documents = [...(patient.documents || []), ...newDocuments];
      }

      // Update patient
      const updatedPatient = await Patient.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      ).populate([
        { path: 'primaryPhysician', select: 'personalInfo specializations' },
        { path: 'registeredBy', select: 'firstName lastName role' }
      ]);

      res.json({
        success: true,
        message: 'Patient updated successfully',
        patient: updatedPatient
      });

    } catch (error) {
      console.error('Update patient error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while updating patient'
      });
    }
  }
);

// @desc    Get patient demographics report
// @route   GET /api/patients/:id/demographics
// @access  Private (with permission)
router.get('/:id/demographics',
  protect,
  checkPermission('patients', 'read'),
  async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id)
        .populate('primaryPhysician', 'personalInfo contactInfo specializations')
        .populate('registeredBy', 'firstName lastName role department');

      if (!patient) {
        return res.status(404).json({
          success: false,
          message: 'Patient not found'
        });
      }

      // Format demographics data
      const demographics = {
        personalInfo: {
          patientId: patient.patientId,
          fullName: patient.fullName,
          firstName: patient.firstName,
          middleName: patient.middleName,
          lastName: patient.lastName,
          dateOfBirth: patient.dateOfBirth,
          age: patient.age,
          gender: patient.gender,
          preferredLanguage: patient.preferredLanguage
        },
        contactInfo: patient.contactInfo,
        address: patient.address,
        emergencyContact: patient.emergencyContact,
        identificationInfo: patient.identificationInfo,
        primaryPhysician: patient.primaryPhysician,
        medicalHistory: patient.medicalHistory,
        registrationInfo: {
          registrationDate: patient.registrationDate,
          registeredBy: patient.registeredBy,
          status: patient.status,
          lastVisitDate: patient.lastVisitDate
        },
        documents: patient.documents.map(doc => ({
          originalName: doc.originalName,
          documentType: doc.documentType,
          uploadDate: doc.uploadDate,
          description: doc.description
        }))
      };

      res.json({
        success: true,
        demographics
      });

    } catch (error) {
      console.error('Get demographics error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching demographics'
      });
    }
  }
);

// @desc    Add note to patient
// @route   POST /api/patients/:id/notes
// @access  Private (with permission)
router.post('/:id/notes',
  protect,
  checkPermission('patients', 'update'),
  [
    body('note').notEmpty().withMessage('Note content is required')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array()
        });
      }

      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        return res.status(404).json({
          success: false,
          message: 'Patient not found'
        });
      }

      const newNote = {
        note: req.body.note,
        addedBy: req.user.id,
        addedDate: new Date()
      };

      patient.notes.push(newNote);
      await patient.save();

      await patient.populate('notes.addedBy', 'firstName lastName role');

      res.json({
        success: true,
        message: 'Note added successfully',
        note: patient.notes[patient.notes.length - 1]
      });

    } catch (error) {
      console.error('Add note error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while adding note'
      });
    }
  }
);

// @desc    Update patient status
// @route   PUT /api/patients/:id/status
// @access  Private (with permission)
router.put('/:id/status',
  protect,
  checkPermission('patients', 'update'),
  [
    body('status').isIn(['active', 'inactive', 'deceased']).withMessage('Invalid status')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array()
        });
      }

      const patient = await Patient.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
      );

      if (!patient) {
        return res.status(404).json({
          success: false,
          message: 'Patient not found'
        });
      }

      res.json({
        success: true,
        message: 'Patient status updated successfully',
        patient: {
          id: patient._id,
          patientId: patient.patientId,
          fullName: patient.fullName,
          status: patient.status
        }
      });

    } catch (error) {
      console.error('Update status error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while updating status'
      });
    }
  }
);

// @desc    Get recent patients
// @route   GET /api/patients/recent
// @access  Private (with permission)
router.get('/recent',
  protect,
  checkPermission('patients', 'read'),
  async (req, res) => {
    try {
      const { limit = 10 } = req.query;

      const recentPatients = await Patient.find({ status: 'active' })
        .select('patientId firstName lastName dateOfBirth gender contactInfo registrationDate lastVisitDate')
        .sort({ registrationDate: -1 })
        .limit(parseInt(limit));

      const formattedPatients = recentPatients.map(patient => ({
        id: patient._id,
        patientId: patient.patientId,
        fullName: patient.fullName,
        age: patient.age,
        gender: patient.gender,
        phone: patient.contactInfo.phone,
        registrationDate: patient.registrationDate,
        lastVisitDate: patient.lastVisitDate
      }));

      res.json({
        success: true,
        patients: formattedPatients
      });

    } catch (error) {
      console.error('Get recent patients error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching recent patients'
      });
    }
  }
);

module.exports = router;