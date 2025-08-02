const mongoose = require('mongoose');

const procedureSchema = new mongoose.Schema({
  procedureCode: {
    type: String,
    required: [true, 'Procedure code is required'],
    unique: true,
    trim: true,
    uppercase: true,
    maxlength: [20, 'Procedure code cannot be more than 20 characters']
  },
  name: {
    type: String,
    required: [true, 'Procedure name is required'],
    trim: true,
    maxlength: [200, 'Procedure name cannot be more than 200 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'radiology', 'laboratory', 'surgery', 'cardiology', 'neurology',
      'orthopedics', 'dermatology', 'ophthalmology', 'ent', 'gynecology',
      'urology', 'gastroenterology', 'pulmonology', 'oncology', 'psychiatry',
      'general_medicine', 'emergency', 'rehabilitation', 'diagnostic', 'therapy'
    ],
    lowercase: true
  },
  subcategory: {
    type: String,
    trim: true,
    maxlength: [100, 'Subcategory cannot be more than 100 characters']
  },
  estimatedDuration: {
    type: Number, // in minutes
    required: [true, 'Estimated duration is required'],
    min: [1, 'Duration must be at least 1 minute'],
    max: [1440, 'Duration cannot exceed 24 hours']
  },
  preparationTime: {
    type: Number, // in minutes
    default: 0,
    min: [0, 'Preparation time cannot be negative'],
    max: [480, 'Preparation time cannot exceed 8 hours']
  },
  recoveryTime: {
    type: Number, // in minutes
    default: 0,
    min: [0, 'Recovery time cannot be negative'],
    max: [1440, 'Recovery time cannot exceed 24 hours']
  },
  cost: {
    baseCost: {
      type: Number,
      required: [true, 'Base cost is required'],
      min: [0, 'Cost cannot be negative']
    },
    currency: {
      type: String,
      default: 'USD',
      uppercase: true,
      maxlength: [3, 'Currency code cannot be more than 3 characters']
    },
    insuranceCoverage: {
      type: Number,
      min: [0, 'Insurance coverage cannot be negative'],
      max: [100, 'Insurance coverage cannot exceed 100%'],
      default: 0
    }
  },
  requiredEquipment: [{
    equipment: {
      type: String,
      required: true,
      trim: true
    },
    quantity: {
      type: Number,
      default: 1,
      min: [1, 'Quantity must be at least 1']
    },
    isOptional: {
      type: Boolean,
      default: false
    }
  }],
  requiredSpecialties: [{
    specialty: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      enum: ['primary', 'assistant', 'consultant'],
      default: 'primary'
    },
    isRequired: {
      type: Boolean,
      default: true
    }
  }],
  roomRequirements: {
    roomType: {
      type: String,
      enum: ['standard', 'operating_room', 'procedure_room', 'imaging_room', 'lab', 'emergency', 'icu', 'isolation'],
      default: 'standard'
    },
    minimumSize: Number, // in square feet
    specialFeatures: [String]
  },
  contraindications: [{
    condition: String,
    severity: {
      type: String,
      enum: ['absolute', 'relative']
    },
    description: String
  }],
  complications: [{
    complication: String,
    probability: {
      type: String,
      enum: ['rare', 'uncommon', 'common']
    },
    severity: {
      type: String,
      enum: ['minor', 'moderate', 'major']
    }
  }],
  preOperativeInstructions: [String],
  postOperativeInstructions: [String],
  consentRequired: {
    type: Boolean,
    default: false
  },
  anesthesiaRequired: {
    type: String,
    enum: ['none', 'local', 'sedation', 'general'],
    default: 'none'
  },
  radiationExposure: {
    hasRadiation: {
      type: Boolean,
      default: false
    },
    dosage: String,
    protectionRequired: Boolean
  },
  followUpRequired: {
    type: Boolean,
    default: false
  },
  followUpSchedule: {
    intervals: [Number], // in days
    specialInstructions: String
  },
  billingCodes: {
    cpt: String,
    icd10: [String],
    hcpcs: String
  },
  schedulingRules: {
    advanceBookingDays: {
      type: Number,
      default: 1,
      min: [0, 'Advance booking days cannot be negative']
    },
    allowedTimeSlots: [{
      dayOfWeek: {
        type: Number,
        min: 0,
        max: 6 // 0 = Sunday, 6 = Saturday
      },
      startTime: String, // HH:mm format
      endTime: String    // HH:mm format
    }],
    blockBookingBefore: Number, // hours before appointment
    requiresApproval: {
      type: Boolean,
      default: false
    },
    approvalRequired: [{
      role: String,
      department: String
    }]
  },
  isActive: {
    type: Boolean,
    default: true
  },
  version: {
    type: Number,
    default: 1
  },
  effectiveDate: {
    type: Date,
    default: Date.now
  },
  expiryDate: {
    type: Date
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  approvalDate: {
    type: Date
  }
}, {
  timestamps: true
});

// Indexes for better query performance
procedureSchema.index({ procedureCode: 1 });
procedureSchema.index({ name: 'text', description: 'text' });
procedureSchema.index({ category: 1 });
procedureSchema.index({ subcategory: 1 });
procedureSchema.index({ isActive: 1 });
procedureSchema.index({ 'cost.baseCost': 1 });
procedureSchema.index({ effectiveDate: 1 });

// Virtual for total duration (including prep and recovery)
procedureSchema.virtual('totalDuration').get(function() {
  return this.preparationTime + this.estimatedDuration + this.recoveryTime;
});

// Virtual for formatted cost
procedureSchema.virtual('formattedCost').get(function() {
  return `${this.cost.currency} ${this.cost.baseCost.toFixed(2)}`;
});

// Static method to find procedures by category
procedureSchema.statics.findByCategory = function(category) {
  return this.find({ category: category, isActive: true });
};

// Static method to search procedures
procedureSchema.statics.searchProcedures = function(searchTerm) {
  return this.find({
    $and: [
      { isActive: true },
      {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { procedureCode: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } }
        ]
      }
    ]
  });
};

// Instance method to check if procedure is available for scheduling
procedureSchema.methods.isAvailableForScheduling = function(dateTime) {
  if (!this.isActive) return false;
  
  const now = new Date();
  if (this.effectiveDate > now) return false;
  if (this.expiryDate && this.expiryDate < now) return false;
  
  const requestedDate = new Date(dateTime);
  const dayOfWeek = requestedDate.getDay();
  const timeStr = requestedDate.toTimeString().substr(0, 5); // HH:mm format
  
  // Check if the day and time are allowed
  if (this.schedulingRules.allowedTimeSlots && this.schedulingRules.allowedTimeSlots.length > 0) {
    const isAllowed = this.schedulingRules.allowedTimeSlots.some(slot => 
      slot.dayOfWeek === dayOfWeek && 
      timeStr >= slot.startTime && 
      timeStr <= slot.endTime
    );
    if (!isAllowed) return false;
  }
  
  // Check advance booking requirement
  const timeDiff = requestedDate.getTime() - now.getTime();
  const daysDiff = timeDiff / (1000 * 3600 * 24);
  if (daysDiff < this.schedulingRules.advanceBookingDays) return false;
  
  return true;
};

// Ensure virtuals are included in JSON output
procedureSchema.set('toJSON', { virtuals: true });
procedureSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Procedure', procedureSchema);