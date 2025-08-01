const express = require('express');
const { body, validationResult, query } = require('express-validator');
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const Physician = require('../models/Physician');
const Resource = require('../models/Resource');
const { protect, checkPermission } = require('../middleware/auth');
const moment = require('moment');

const router = express.Router();

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Private (with permission)
router.post('/',
  protect,
  checkPermission('appointments', 'create'),
  [
    body('patient').isMongoId().withMessage('Valid patient ID is required'),
    body('physician').isMongoId().withMessage('Valid physician ID is required'),
    body('scheduledDateTime').isISO8601().withMessage('Valid scheduled date and time is required'),
    body('duration').isInt({ min: 5, max: 480 }).withMessage('Duration must be between 5 and 480 minutes'),
    body('visitType').isIn(['consultation', 'procedure', 'follow_up', 'emergency', 'routine_checkup', 'diagnostic', 'therapy']).withMessage('Invalid visit type'),
    body('reasonForVisit').optional().isLength({ max: 500 }).withMessage('Reason for visit cannot exceed 500 characters')
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

      const { patient, physician, scheduledDateTime, duration, visitType, procedure, room, reasonForVisit, notes, priority } = req.body;

      // Validate patient exists
      const patientDoc = await Patient.findById(patient);
      if (!patientDoc) {
        return res.status(404).json({
          success: false,
          message: 'Patient not found'
        });
      }

      // Validate physician exists
      const physicianDoc = await Physician.findById(physician);
      if (!physicianDoc) {
        return res.status(404).json({
          success: false,
          message: 'Physician not found'
        });
      }

      // Calculate end time
      const startTime = new Date(scheduledDateTime);
      const endTime = new Date(startTime.getTime() + (duration * 60000));

      // Check for conflicts
      const conflicts = await Appointment.checkConflicts(physician, room, startTime, endTime);
      if (conflicts.length > 0) {
        return res.status(409).json({
          success: false,
          message: 'Appointment conflicts with existing schedule',
          conflicts: conflicts.map(conflict => ({
            appointmentId: conflict.appointmentId,
            scheduledDateTime: conflict.scheduledDateTime,
            endDateTime: conflict.endDateTime,
            patient: conflict.patient,
            physician: conflict.physician
          }))
        });
      }

      // Check physician availability
      if (!physicianDoc.isAvailable(startTime, duration)) {
        return res.status(400).json({
          success: false,
          message: 'Physician is not available at the requested time'
        });
      }

      // Check room availability if specified
      if (room) {
        const roomDoc = await Resource.findById(room);
        if (!roomDoc) {
          return res.status(404).json({
            success: false,
            message: 'Room not found'
          });
        }

        if (!roomDoc.isAvailable(startTime, endTime)) {
          return res.status(400).json({
            success: false,
            message: 'Room is not available at the requested time'
          });
        }
      }

      // Create appointment
      const appointmentData = {
        patient,
        physician,
        procedure,
        scheduledDateTime: startTime,
        endDateTime: endTime,
        duration,
        visitType,
        room,
        reasonForVisit,
        notes,
        priority: priority || 'normal',
        createdBy: req.user.id
      };

      const appointment = new Appointment(appointmentData);
      await appointment.save();

      // Populate references for response
      await appointment.populate([
        { path: 'patient', select: 'patientId firstName lastName contactInfo' },
        { path: 'physician', select: 'personalInfo specializations' },
        { path: 'procedure', select: 'name procedureCode estimatedDuration' },
        { path: 'room', select: 'name location' },
        { path: 'createdBy', select: 'firstName lastName role' }
      ]);

      // Update patient's last visit date
      await Patient.findByIdAndUpdate(patient, { lastVisitDate: startTime });

      res.status(201).json({
        success: true,
        message: 'Appointment created successfully',
        appointment
      });

    } catch (error) {
      console.error('Create appointment error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while creating appointment'
      });
    }
  }
);

// @desc    Get appointments (with calendar view support)
// @route   GET /api/appointments
// @access  Private (with permission)
router.get('/',
  protect,
  checkPermission('appointments', 'read'),
  [
    query('startDate').optional().isISO8601().withMessage('Valid start date is required'),
    query('endDate').optional().isISO8601().withMessage('Valid end date is required'),
    query('physician').optional().isMongoId().withMessage('Valid physician ID is required'),
    query('patient').optional().isMongoId().withMessage('Valid patient ID is required'),
    query('status').optional().isIn(['scheduled', 'confirmed', 'checked_in', 'in_progress', 'completed', 'no_show', 'cancelled', 'rescheduled']).withMessage('Invalid status'),
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
        startDate,
        endDate,
        physician,
        patient,
        status,
        visitType,
        priority,
        room,
        page = 1,
        limit = 50
      } = req.query;

      // Build query
      const query = {};

      if (startDate || endDate) {
        query.scheduledDateTime = {};
        if (startDate) query.scheduledDateTime.$gte = new Date(startDate);
        if (endDate) query.scheduledDateTime.$lte = new Date(endDate);
      }

      if (physician) query.physician = physician;
      if (patient) query.patient = patient;
      if (status) query.status = status;
      if (visitType) query.visitType = visitType;
      if (priority) query.priority = priority;
      if (room) query.room = room;

      // Execute query
      const appointments = await Appointment.find(query)
        .populate('patient', 'patientId firstName lastName contactInfo')
        .populate('physician', 'personalInfo specializations')
        .populate('procedure', 'name procedureCode estimatedDuration')
        .populate('room', 'name location')
        .sort({ scheduledDateTime: 1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);

      const total = await Appointment.countDocuments(query);

      // Format for calendar view
      const calendarEvents = appointments.map(appointment => ({
        id: appointment._id,
        appointmentId: appointment.appointmentId,
        title: `${appointment.patient.firstName} ${appointment.patient.lastName} - ${appointment.visitType}`,
        start: appointment.scheduledDateTime,
        end: appointment.endDateTime,
        patient: {
          id: appointment.patient._id,
          patientId: appointment.patient.patientId,
          fullName: `${appointment.patient.firstName} ${appointment.patient.lastName}`,
          phone: appointment.patient.contactInfo.phone
        },
        physician: {
          id: appointment.physician._id,
          fullName: appointment.physician.fullName,
          specialty: appointment.physician.primarySpecialty
        },
        procedure: appointment.procedure,
        room: appointment.room,
        visitType: appointment.visitType,
        status: appointment.status,
        priority: appointment.priority,
        reasonForVisit: appointment.reasonForVisit,
        notes: appointment.notes,
        duration: appointment.duration,
        backgroundColor: getStatusColor(appointment.status),
        borderColor: getPriorityColor(appointment.priority)
      }));

      res.json({
        success: true,
        appointments: calendarEvents,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      });

    } catch (error) {
      console.error('Get appointments error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching appointments'
      });
    }
  }
);

// @desc    Get appointment by ID
// @route   GET /api/appointments/:id
// @access  Private (with permission)
router.get('/:id',
  protect,
  checkPermission('appointments', 'read'),
  async (req, res) => {
    try {
      const appointment = await Appointment.findById(req.params.id)
        .populate('patient')
        .populate('physician')
        .populate('procedure')
        .populate('room')
        .populate('createdBy', 'firstName lastName role')
        .populate('lastModifiedBy', 'firstName lastName role');

      if (!appointment) {
        return res.status(404).json({
          success: false,
          message: 'Appointment not found'
        });
      }

      res.json({
        success: true,
        appointment
      });

    } catch (error) {
      console.error('Get appointment error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching appointment'
      });
    }
  }
);

// @desc    Update appointment
// @route   PUT /api/appointments/:id
// @access  Private (with permission)
router.put('/:id',
  protect,
  checkPermission('appointments', 'update'),
  [
    body('scheduledDateTime').optional().isISO8601().withMessage('Valid scheduled date and time is required'),
    body('duration').optional().isInt({ min: 5, max: 480 }).withMessage('Duration must be between 5 and 480 minutes'),
    body('visitType').optional().isIn(['consultation', 'procedure', 'follow_up', 'emergency', 'routine_checkup', 'diagnostic', 'therapy']).withMessage('Invalid visit type'),
    body('status').optional().isIn(['scheduled', 'confirmed', 'checked_in', 'in_progress', 'completed', 'no_show', 'cancelled', 'rescheduled']).withMessage('Invalid status'),
    body('priority').optional().isIn(['low', 'normal', 'high', 'urgent']).withMessage('Invalid priority')
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

      const appointment = await Appointment.findById(req.params.id);
      if (!appointment) {
        return res.status(404).json({
          success: false,
          message: 'Appointment not found'
        });
      }

      // Check if time is being changed and validate conflicts
      if (req.body.scheduledDateTime || req.body.duration) {
        const newStartTime = new Date(req.body.scheduledDateTime || appointment.scheduledDateTime);
        const newDuration = req.body.duration || appointment.duration;
        const newEndTime = new Date(newStartTime.getTime() + (newDuration * 60000));

        // Check for conflicts (excluding current appointment)
        const conflicts = await Appointment.checkConflicts(
          req.body.physician || appointment.physician,
          req.body.room || appointment.room,
          newStartTime,
          newEndTime,
          appointment._id
        );

        if (conflicts.length > 0) {
          return res.status(409).json({
            success: false,
            message: 'Appointment conflicts with existing schedule',
            conflicts
          });
        }

        // Update end time if duration or start time changed
        if (req.body.scheduledDateTime || req.body.duration) {
          req.body.endDateTime = newEndTime;
        }
      }

      // Track reschedule information
      if (req.body.scheduledDateTime && req.body.scheduledDateTime !== appointment.scheduledDateTime.toISOString()) {
        req.body.rescheduledInfo = {
          originalDateTime: appointment.scheduledDateTime,
          rescheduledAt: new Date(),
          rescheduledBy: req.user.id,
          rescheduleReason: req.body.rescheduleReason || 'Updated by staff'
        };
        req.body.status = 'rescheduled';
      }

      // Track cancellation information
      if (req.body.status === 'cancelled') {
        req.body.cancelledInfo = {
          cancelledAt: new Date(),
          cancelledBy: req.user.id,
          cancellationReason: req.body.cancellationReason || 'other',
          cancellationNotes: req.body.cancellationNotes || ''
        };
      }

      req.body.lastModifiedBy = req.user.id;

      const updatedAppointment = await Appointment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      ).populate([
        { path: 'patient', select: 'patientId firstName lastName contactInfo' },
        { path: 'physician', select: 'personalInfo specializations' },
        { path: 'procedure', select: 'name procedureCode' },
        { path: 'room', select: 'name location' }
      ]);

      res.json({
        success: true,
        message: 'Appointment updated successfully',
        appointment: updatedAppointment
      });

    } catch (error) {
      console.error('Update appointment error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while updating appointment'
      });
    }
  }
);

// @desc    Check in patient
// @route   POST /api/appointments/:id/checkin
// @access  Private (with permission)
router.post('/:id/checkin',
  protect,
  checkPermission('appointments', 'update'),
  async (req, res) => {
    try {
      const appointment = await Appointment.findById(req.params.id);
      if (!appointment) {
        return res.status(404).json({
          success: false,
          message: 'Appointment not found'
        });
      }

      if (appointment.status !== 'scheduled' && appointment.status !== 'confirmed') {
        return res.status(400).json({
          success: false,
          message: 'Appointment cannot be checked in from current status'
        });
      }

      const checkInData = {
        status: 'checked_in',
        checkInInfo: {
          checkedInAt: new Date(),
          checkedInBy: req.user.id,
          vitals: req.body.vitals || {}
        },
        lastModifiedBy: req.user.id
      };

      const updatedAppointment = await Appointment.findByIdAndUpdate(
        req.params.id,
        checkInData,
        { new: true }
      ).populate('patient', 'patientId firstName lastName');

      res.json({
        success: true,
        message: 'Patient checked in successfully',
        appointment: {
          id: updatedAppointment._id,
          appointmentId: updatedAppointment.appointmentId,
          patient: updatedAppointment.patient,
          status: updatedAppointment.status,
          checkedInAt: updatedAppointment.checkInInfo.checkedInAt
        }
      });

    } catch (error) {
      console.error('Check in error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while checking in patient'
      });
    }
  }
);

// @desc    Get available time slots
// @route   GET /api/appointments/slots/available
// @access  Private (with permission)
router.get('/slots/available',
  protect,
  checkPermission('appointments', 'read'),
  [
    query('physician').isMongoId().withMessage('Valid physician ID is required'),
    query('date').isISO8601().withMessage('Valid date is required'),
    query('duration').optional().isInt({ min: 5, max: 480 }).withMessage('Duration must be between 5 and 480 minutes')
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

      const { physician, date, duration = 30 } = req.query;

      // Get physician
      const physicianDoc = await Physician.findById(physician);
      if (!physicianDoc) {
        return res.status(404).json({
          success: false,
          message: 'Physician not found'
        });
      }

      // Get available slots from physician schedule
      const availableSlots = physicianDoc.getAvailableSlots(date, duration);

      // Get existing appointments for the date to filter out booked slots
      const startOfDay = moment(date).startOf('day').toDate();
      const endOfDay = moment(date).endOf('day').toDate();

      const existingAppointments = await Appointment.find({
        physician,
        scheduledDateTime: { $gte: startOfDay, $lte: endOfDay },
        status: { $nin: ['cancelled', 'no_show'] }
      });

      // Filter out conflicting slots
      const filteredSlots = availableSlots.filter(slot => {
        return !existingAppointments.some(appointment => {
          const appointmentStart = appointment.scheduledDateTime;
          const appointmentEnd = appointment.endDateTime;
          return (slot.start < appointmentEnd && slot.end > appointmentStart);
        });
      });

      res.json({
        success: true,
        availableSlots: filteredSlots,
        total: filteredSlots.length
      });

    } catch (error) {
      console.error('Get available slots error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching available slots'
      });
    }
  }
);

// @desc    Get appointment statistics
// @route   GET /api/appointments/stats
// @access  Private (with permission)
router.get('/stats',
  protect,
  checkPermission('appointments', 'read'),
  async (req, res) => {
    try {
      const { startDate, endDate, physician } = req.query;

      const dateFilter = {};
      if (startDate || endDate) {
        dateFilter.scheduledDateTime = {};
        if (startDate) dateFilter.scheduledDateTime.$gte = new Date(startDate);
        if (endDate) dateFilter.scheduledDateTime.$lte = new Date(endDate);
      }

      if (physician) dateFilter.physician = physician;

      // Get appointment counts by status
      const statusStats = await Appointment.aggregate([
        { $match: dateFilter },
        { $group: { _id: '$status', count: { $sum: 1 } } }
      ]);

      // Get appointment counts by visit type
      const visitTypeStats = await Appointment.aggregate([
        { $match: dateFilter },
        { $group: { _id: '$visitType', count: { $sum: 1 } } }
      ]);

      // Get daily appointment counts
      const dailyStats = await Appointment.aggregate([
        { $match: dateFilter },
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m-%d', date: '$scheduledDateTime' } },
            count: { $sum: 1 }
          }
        },
        { $sort: { _id: 1 } }
      ]);

      res.json({
        success: true,
        stats: {
          byStatus: statusStats,
          byVisitType: visitTypeStats,
          daily: dailyStats
        }
      });

    } catch (error) {
      console.error('Get appointment stats error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching appointment statistics'
      });
    }
  }
);

// Helper functions for calendar colors
function getStatusColor(status) {
  const colors = {
    scheduled: '#007bff',
    confirmed: '#28a745',
    checked_in: '#ffc107',
    in_progress: '#fd7e14',
    completed: '#6f42c1',
    no_show: '#dc3545',
    cancelled: '#6c757d',
    rescheduled: '#17a2b8'
  };
  return colors[status] || '#007bff';
}

function getPriorityColor(priority) {
  const colors = {
    low: '#6c757d',
    normal: '#007bff',
    high: '#ffc107',
    urgent: '#dc3545'
  };
  return colors[priority] || '#007bff';
}

module.exports = router;