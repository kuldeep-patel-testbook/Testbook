const express = require('express');
const { body, validationResult } = require('express-validator');
const Physician = require('../models/Physician');
const { protect, checkPermission } = require('../middleware/auth');

const router = express.Router();

// @desc    Get all physicians
// @route   GET /api/physicians
// @access  Private (with permission)
router.get('/',
  protect,
  checkPermission('physicians', 'read'),
  async (req, res) => {
    try {
      const { page = 1, limit = 10, specialty, search, status = 'active', isReferring } = req.query;

      const query = { status };
      if (specialty) query['specializations.specialty'] = specialty;
      if (isReferring !== undefined) query.isReferringPhysician = isReferring === 'true';
      if (search) {
        query.$or = [
          { 'personalInfo.firstName': new RegExp(search, 'i') },
          { 'personalInfo.lastName': new RegExp(search, 'i') },
          { 'contactInfo.email': new RegExp(search, 'i') },
          { physicianId: new RegExp(search, 'i') }
        ];
      }

      const physicians = await Physician.find(query)
        .populate('createdBy', 'firstName lastName')
        .sort({ 'personalInfo.lastName': 1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);

      const total = await Physician.countDocuments(query);

      res.json({
        success: true,
        physicians,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      });

    } catch (error) {
      console.error('Get physicians error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching physicians'
      });
    }
  }
);

// @desc    Create new physician
// @route   POST /api/physicians
// @access  Private (with permission)
router.post('/',
  protect,
  checkPermission('physicians', 'create'),
  [
    body('personalInfo.firstName').notEmpty().withMessage('First name is required'),
    body('personalInfo.lastName').notEmpty().withMessage('Last name is required'),
    body('contactInfo.primaryPhone').notEmpty().withMessage('Primary phone is required'),
    body('contactInfo.email').isEmail().withMessage('Valid email is required'),
    body('professionalInfo.licenseNumber').notEmpty().withMessage('License number is required'),
    body('professionalInfo.npiNumber').matches(/^\d{10}$/).withMessage('NPI number must be 10 digits')
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

      // Check for duplicate license or NPI number
      const existing = await Physician.findOne({
        $or: [
          { 'professionalInfo.licenseNumber': req.body.professionalInfo.licenseNumber },
          { 'professionalInfo.npiNumber': req.body.professionalInfo.npiNumber }
        ]
      });

      if (existing) {
        return res.status(400).json({
          success: false,
          message: 'Physician with this license number or NPI already exists'
        });
      }

      const physicianData = {
        ...req.body,
        createdBy: req.user.id
      };

      const physician = new Physician(physicianData);
      await physician.save();

      await physician.populate('createdBy', 'firstName lastName');

      res.status(201).json({
        success: true,
        message: 'Physician created successfully',
        physician
      });

    } catch (error) {
      console.error('Create physician error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while creating physician'
      });
    }
  }
);

module.exports = router;