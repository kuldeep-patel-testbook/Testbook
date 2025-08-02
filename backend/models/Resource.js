const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  resourceId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: [true, 'Resource name is required'],
    trim: true,
    maxlength: [100, 'Resource name cannot be more than 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  type: {
    type: String,
    required: [true, 'Resource type is required'],
    enum: [
      'room', 'equipment', 'vehicle', 'personnel', 'facility', 'technology'
    ],
    lowercase: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      // Room categories
      'examination_room', 'operating_room', 'procedure_room', 'imaging_room',
      'laboratory', 'emergency_room', 'icu', 'patient_room', 'consultation_room',
      'isolation_room', 'recovery_room', 'waiting_room', 'office',
      
      // Equipment categories
      'diagnostic_equipment', 'surgical_equipment', 'monitoring_equipment',
      'life_support_equipment', 'imaging_equipment', 'laboratory_equipment',
      'rehabilitation_equipment', 'therapeutic_equipment', 'office_equipment',
      
      // Other categories
      'transportation', 'communication', 'furniture', 'supplies', 'software'
    ],
    lowercase: true
  },
  location: {
    building: {
      type: String,
      required: [true, 'Building is required'],
      trim: true
    },
    floor: {
      type: String,
      required: [true, 'Floor is required'],
      trim: true
    },
    wing: {
      type: String,
      trim: true
    },
    roomNumber: {
      type: String,
      trim: true
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      trim: true
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  specifications: {
    capacity: {
      type: Number,
      min: [1, 'Capacity must be at least 1']
    },
    dimensions: {
      length: Number, // in feet
      width: Number,  // in feet
      height: Number, // in feet
      area: Number    // in square feet
    },
    features: [String],
    technicalSpecs: [{
      specification: String,
      value: String,
      unit: String
    }],
    accessibility: {
      wheelchairAccessible: {
        type: Boolean,
        default: false
      },
      hearingAssistive: {
        type: Boolean,
        default: false
      },
      visualAssistive: {
        type: Boolean,
        default: false
      }
    }
  },
  availability: {
    schedule: [{
      dayOfWeek: {
        type: Number,
        min: 0,
        max: 6, // 0 = Sunday, 6 = Saturday
        required: true
      },
      startTime: {
        type: String,
        required: true,
        match: [/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter time in HH:MM format']
      },
      endTime: {
        type: String,
        required: true,
        match: [/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter time in HH:MM format']
      }
    }],
    maintenanceSchedule: [{
      startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date,
        required: true
      },
      type: {
        type: String,
        enum: ['routine', 'preventive', 'corrective', 'emergency'],
        required: true
      },
      description: String,
      recurringSchedule: {
        isRecurring: {
          type: Boolean,
          default: false
        },
        frequency: {
          type: String,
          enum: ['daily', 'weekly', 'monthly', 'quarterly', 'annually']
        },
        interval: Number
      }
    }],
    outOfService: [{
      startDate: {
        type: Date,
        required: true
      },
      endDate: Date,
      reason: {
        type: String,
        required: true,
        enum: ['maintenance', 'repair', 'cleaning', 'renovation', 'inspection', 'other']
      },
      description: String,
      reportedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }]
  },
  reservationRules: {
    advanceBookingDays: {
      type: Number,
      default: 30,
      min: [0, 'Advance booking days cannot be negative']
    },
    maxBookingDuration: {
      type: Number, // in minutes
      default: 480, // 8 hours
      min: [15, 'Maximum booking duration must be at least 15 minutes']
    },
    minBookingDuration: {
      type: Number, // in minutes
      default: 15,
      min: [5, 'Minimum booking duration must be at least 5 minutes']
    },
    allowedBookingTimes: [{
      dayOfWeek: {
        type: Number,
        min: 0,
        max: 6
      },
      startTime: String,
      endTime: String
    }],
    requiresApproval: {
      type: Boolean,
      default: false
    },
    approvalRoles: [String],
    bufferTime: {
      before: {
        type: Number, // in minutes
        default: 0
      },
      after: {
        type: Number, // in minutes
        default: 0
      }
    },
    restrictions: [{
      type: {
        type: String,
        enum: ['user_role', 'department', 'procedure_type', 'time_of_day', 'day_of_week']
      },
      value: String,
      description: String
    }]
  },
  equipment: {
    manufacturer: String,
    model: String,
    serialNumber: String,
    yearManufactured: Number,
    warrantyInfo: {
      provider: String,
      startDate: Date,
      endDate: Date,
      contactInfo: String
    },
    calibration: {
      lastCalibrated: Date,
      nextCalibrationDue: Date,
      calibrationFrequency: Number, // in days
      calibratedBy: String
    },
    inspection: {
      lastInspected: Date,
      nextInspectionDue: Date,
      inspectionFrequency: Number, // in days
      inspectedBy: String,
      certificationNumber: String
    }
  },
  financialInfo: {
    purchasePrice: Number,
    currentValue: Number,
    currency: {
      type: String,
      default: 'USD',
      uppercase: true
    },
    purchaseDate: Date,
    vendor: String,
    depreciationRate: Number, // percentage per year
    insuranceInfo: {
      provider: String,
      policyNumber: String,
      coverageAmount: Number,
      expiryDate: Date
    }
  },
  utilization: {
    totalBookings: {
      type: Number,
      default: 0
    },
    totalHoursUsed: {
      type: Number,
      default: 0
    },
    averageBookingDuration: Number, // in minutes
    utilizationRate: Number, // percentage
    lastUsed: Date,
    mostFrequentUsers: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      bookingCount: Number
    }],
    peakUsageTimes: [{
      dayOfWeek: Number,
      timeSlot: String,
      usageCount: Number
    }]
  },
  status: {
    type: String,
    enum: ['available', 'occupied', 'maintenance', 'out_of_service', 'reserved'],
    default: 'available'
  },
  condition: {
    type: String,
    enum: ['excellent', 'good', 'fair', 'poor', 'needs_repair'],
    default: 'good'
  },
  priority: {
    type: String,
    enum: ['low', 'normal', 'high', 'critical'],
    default: 'normal'
  },
  operationalNotes: [{
    note: String,
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    addedDate: {
      type: Date,
      default: Date.now
    },
    category: {
      type: String,
      enum: ['maintenance', 'usage', 'issue', 'general']
    }
  }],
  relatedResources: [{
    resource: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resource'
    },
    relationship: {
      type: String,
      enum: ['part_of', 'requires', 'supports', 'replaces', 'backup_for']
    },
    description: String
  }],
  documents: [{
    filename: String,
    originalName: String,
    documentType: {
      type: String,
      enum: ['manual', 'warranty', 'insurance', 'maintenance_log', 'inspection_report', 'other']
    },
    uploadDate: {
      type: Date,
      default: Date.now
    }
  }],
  assignedTo: {
    primaryResponsible: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    department: String,
    contactPerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Indexes for better query performance
resourceSchema.index({ resourceId: 1 });
resourceSchema.index({ name: 'text', description: 'text' });
resourceSchema.index({ type: 1 });
resourceSchema.index({ category: 1 });
resourceSchema.index({ 'location.building': 1, 'location.floor': 1 });
resourceSchema.index({ 'location.department': 1 });
resourceSchema.index({ status: 1 });
resourceSchema.index({ condition: 1 });
resourceSchema.index({ priority: 1 });
resourceSchema.index({ isActive: 1 });

// Generate resource ID before saving
resourceSchema.pre('save', async function(next) {
  if (!this.resourceId) {
    const date = new Date();
    const year = date.getFullYear().toString().substr(-2);
    
    // Create prefix based on type
    const typePrefix = {
      'room': 'RM',
      'equipment': 'EQ',
      'vehicle': 'VH',
      'personnel': 'PR',
      'facility': 'FC',
      'technology': 'TC'
    };
    
    const prefix = typePrefix[this.type] || 'RS';
    
    // Find the latest resource of this type for this year
    const latestResource = await this.constructor.findOne(
      { resourceId: new RegExp(`^${prefix}${year}`) },
      {},
      { sort: { resourceId: -1 } }
    );
    
    let sequence = 1;
    if (latestResource) {
      const lastSequence = parseInt(latestResource.resourceId.substr(-4));
      sequence = lastSequence + 1;
    }
    
    this.resourceId = `${prefix}${year}${String(sequence).padStart(4, '0')}`;
  }
  next();
});

// Virtual for full location
resourceSchema.virtual('fullLocation').get(function() {
  let location = `${this.location.building}`;
  if (this.location.wing) location += `, ${this.location.wing}`;
  location += `, Floor ${this.location.floor}`;
  if (this.location.roomNumber) location += `, Room ${this.location.roomNumber}`;
  return location;
});

// Virtual for utilization percentage
resourceSchema.virtual('utilizationPercentage').get(function() {
  if (!this.utilization.utilizationRate) return 0;
  return Math.round(this.utilization.utilizationRate * 100) / 100;
});

// Static method to find available resources
resourceSchema.statics.findAvailable = function(startTime, endTime, resourceType = null, category = null) {
  const query = {
    status: { $in: ['available', 'reserved'] },
    isActive: true
  };
  
  if (resourceType) query.type = resourceType;
  if (category) query.category = category;
  
  return this.find(query);
};

// Static method to search resources
resourceSchema.statics.searchResources = function(searchTerm, filters = {}) {
  const query = {
    $and: [
      { isActive: true },
      {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { resourceId: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
          { 'location.roomNumber': { $regex: searchTerm, $options: 'i' } }
        ]
      }
    ]
  };
  
  // Apply additional filters
  if (filters.type) query.type = filters.type;
  if (filters.category) query.category = filters.category;
  if (filters.department) query['location.department'] = filters.department;
  if (filters.building) query['location.building'] = filters.building;
  if (filters.status) query.status = filters.status;
  
  return this.find(query);
};

// Instance method to check availability
resourceSchema.methods.isAvailable = function(startTime, endTime) {
  if (!this.isActive || this.status === 'out_of_service') return false;
  
  const requestedStart = new Date(startTime);
  const requestedEnd = new Date(endTime);
  
  // Check if resource is out of service during requested time
  const isOutOfService = this.availability.outOfService.some(outage => {
    const outageStart = new Date(outage.startDate);
    const outageEnd = outage.endDate ? new Date(outage.endDate) : new Date('2099-12-31');
    
    return (requestedStart < outageEnd && requestedEnd > outageStart);
  });
  
  if (isOutOfService) return false;
  
  // Check maintenance schedule
  const hasMaintenance = this.availability.maintenanceSchedule.some(maintenance => {
    const maintenanceStart = new Date(maintenance.startDate);
    const maintenanceEnd = new Date(maintenance.endDate);
    
    return (requestedStart < maintenanceEnd && requestedEnd > maintenanceStart);
  });
  
  if (hasMaintenance) return false;
  
  // Check operating hours
  const dayOfWeek = requestedStart.getDay();
  const timeStr = requestedStart.toTimeString().substr(0, 5);
  const endTimeStr = requestedEnd.toTimeString().substr(0, 5);
  
  if (this.availability.schedule && this.availability.schedule.length > 0) {
    const daySchedule = this.availability.schedule.find(s => s.dayOfWeek === dayOfWeek);
    if (!daySchedule) return false;
    
    if (timeStr < daySchedule.startTime || endTimeStr > daySchedule.endTime) {
      return false;
    }
  }
  
  return true;
};

// Instance method to get available time slots
resourceSchema.methods.getAvailableSlots = function(date, duration = 60) {
  const requestedDate = new Date(date);
  const dayOfWeek = requestedDate.getDay();
  
  if (!this.isAvailable(requestedDate, new Date(requestedDate.getTime() + duration * 60000))) {
    return [];
  }
  
  const daySchedule = this.availability.schedule.find(s => s.dayOfWeek === dayOfWeek);
  if (!daySchedule) return [];
  
  const slots = [];
  const startTime = new Date(`${date}T${daySchedule.startTime}:00`);
  const endTime = new Date(`${date}T${daySchedule.endTime}:00`);
  
  let currentTime = new Date(startTime);
  while (currentTime < endTime) {
    const slotEnd = new Date(currentTime.getTime() + (duration * 60000));
    if (slotEnd <= endTime) {
      slots.push({
        start: new Date(currentTime),
        end: slotEnd,
        available: true // This would need to be checked against existing bookings
      });
    }
    currentTime = new Date(currentTime.getTime() + (this.reservationRules.minBookingDuration * 60000));
  }
  
  return slots;
};

// Instance method to update utilization stats
resourceSchema.methods.updateUtilization = function(bookingDuration) {
  this.utilization.totalBookings += 1;
  this.utilization.totalHoursUsed += bookingDuration / 60;
  this.utilization.lastUsed = new Date();
  
  // Calculate average booking duration
  this.utilization.averageBookingDuration = this.utilization.totalHoursUsed / this.utilization.totalBookings * 60;
  
  return this.save();
};

// Ensure virtuals are included in JSON output
resourceSchema.set('toJSON', { virtuals: true });
resourceSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Resource', resourceSchema);