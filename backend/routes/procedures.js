const express = require('express');
const { body, validationResult, query } = require('express-validator');
const Procedure = require('../models/Procedure');
const { protect, checkPermission } = require('../middleware/auth');

const router = express.Router();

// @desc    Get all procedures
// @route   GET /api/procedures
// @access  Private (with permission)
router.get('/',
  protect,
  checkPermission('procedures', 'read'),
  async (req, res) => {
    try {
      const { page = 1, limit = 10, category, search, isActive = true } = req.query;

      const query = { isActive };
      if (category) query.category = category;
      if (search) {
        query.$or = [
          { name: new RegExp(search, 'i') },
          { procedureCode: new RegExp(search, 'i') },
          { description: new RegExp(search, 'i') }
        ];
      }

      const procedures = await Procedure.find(query)
        .populate('createdBy', 'firstName lastName')
        .sort({ name: 1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);

      const total = await Procedure.countDocuments(query);

      res.json({
        success: true,
        procedures,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      });

    } catch (error) {
      console.error('Get procedures error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching procedures'
      });
    }
  }
);

// @desc    Create new procedure
// @route   POST /api/procedures
// @access  Private (with permission)
router.post('/',
  protect,
  checkPermission('procedures', 'create'),
  [
    body('procedureCode').notEmpty().withMessage('Procedure code is required'),
    body('name').notEmpty().withMessage('Procedure name is required'),
    body('category').notEmpty().withMessage('Category is required'),
    body('estimatedDuration').isInt({ min: 1 }).withMessage('Estimated duration must be at least 1 minute'),
    body('cost.baseCost').isFloat({ min: 0 }).withMessage('Base cost must be a positive number')
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

      // Check if procedure code already exists
      const existingProcedure = await Procedure.findOne({ procedureCode: req.body.procedureCode });
      if (existingProcedure) {
        return res.status(400).json({
          success: false,
          message: 'Procedure code already exists'
        });
      }

      const procedureData = {
        ...req.body,
        createdBy: req.user.id
      };

      const procedure = new Procedure(procedureData);
      await procedure.save();

      await procedure.populate('createdBy', 'firstName lastName');

      res.status(201).json({
        success: true,
        message: 'Procedure created successfully',
        procedure
      });

    } catch (error) {
      console.error('Create procedure error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while creating procedure'
      });
    }
  }
);

// @desc    Update procedure
// @route   PUT /api/procedures/:id
// @access  Private (with permission)
router.put('/:id',
  protect,
  checkPermission('procedures', 'update'),
  async (req, res) => {
    try {
      const procedure = await Procedure.findById(req.params.id);
      if (!procedure) {
        return res.status(404).json({
          success: false,
          message: 'Procedure not found'
        });
      }

      req.body.lastModifiedBy = req.user.id;

      const updatedProcedure = await Procedure.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      ).populate('createdBy lastModifiedBy', 'firstName lastName');

      res.json({
        success: true,
        message: 'Procedure updated successfully',
        procedure: updatedProcedure
      });

    } catch (error) {
      console.error('Update procedure error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while updating procedure'
      });
    }
  }
);

module.exports = router;