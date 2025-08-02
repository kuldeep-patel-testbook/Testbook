const express = require('express');
const { body, validationResult } = require('express-validator');
const Resource = require('../models/Resource');
const { protect, checkPermission } = require('../middleware/auth');

const router = express.Router();

// @desc    Get all resources
// @route   GET /api/resources
// @access  Private (with permission)
router.get('/',
  protect,
  checkPermission('resources', 'read'),
  async (req, res) => {
    try {
      const { page = 1, limit = 10, type, category, department, search, status } = req.query;

      const query = { isActive: true };
      if (type) query.type = type;
      if (category) query.category = category;
      if (department) query['location.department'] = department;
      if (status) query.status = status;
      if (search) {
        query.$or = [
          { name: new RegExp(search, 'i') },
          { resourceId: new RegExp(search, 'i') },
          { 'location.roomNumber': new RegExp(search, 'i') }
        ];
      }

      const resources = await Resource.find(query)
        .populate('createdBy', 'firstName lastName')
        .sort({ name: 1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);

      const total = await Resource.countDocuments(query);

      res.json({
        success: true,
        resources,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      });

    } catch (error) {
      console.error('Get resources error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching resources'
      });
    }
  }
);

// @desc    Create new resource
// @route   POST /api/resources
// @access  Private (with permission)
router.post('/',
  protect,
  checkPermission('resources', 'create'),
  [
    body('name').notEmpty().withMessage('Resource name is required'),
    body('type').notEmpty().withMessage('Resource type is required'),
    body('category').notEmpty().withMessage('Category is required'),
    body('location.building').notEmpty().withMessage('Building is required'),
    body('location.floor').notEmpty().withMessage('Floor is required'),
    body('location.department').notEmpty().withMessage('Department is required')
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

      const resourceData = {
        ...req.body,
        createdBy: req.user.id
      };

      const resource = new Resource(resourceData);
      await resource.save();

      await resource.populate('createdBy', 'firstName lastName');

      res.status(201).json({
        success: true,
        message: 'Resource created successfully',
        resource
      });

    } catch (error) {
      console.error('Create resource error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while creating resource'
      });
    }
  }
);

module.exports = router;