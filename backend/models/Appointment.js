const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  appointmentId: {
    type: String,
    unique: true,
    required: true
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: [true, 'Patient is required']
  },
  physician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Physician',
    required: [true, 'Physician is required']
  },
  procedure: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Procedure'
  },
  scheduledDateTime: {
    type: Date,
    required: [true, 'Scheduled date and time is required'],
    validate: {
      validator: function(v) {
        return v > new Date();
      },
      message: 'Appointment cannot be scheduled in the past'
    }
  },
  endDateTime: {
    type: Date,
    required: [true, 'End date and time is required']
  },
  duration: {
    type: Number, // in minutes
    required: [true, 'Duration is required'],
    min: [5, 'Duration must be at least 5 minutes'],
    max: [480, 'Duration cannot exceed 8 hours']
  },
  visitType: {
    type: String,
    required: [true, 'Visit type is required'],
    enum: ['consultation', 'procedure', 'follow_up', 'emergency', 'routine_checkup', 'diagnostic', 'therapy'],
    default: 'consultation'
  },
  status: {
    type: String,
    enum: ['scheduled', 'confirmed', 'checked_in', 'in_progress', 'completed', 'no_show', 'cancelled', 'rescheduled'],
    default: 'scheduled'
  },
  priority: {
    type: String,
    enum: ['low', 'normal', 'high', 'urgent'],
    default: 'normal'
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resource'
  },
  reasonForVisit: {
    type: String,
    trim: true,
    maxlength: [500, 'Reason for visit cannot be more than 500 characters']
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [1000, 'Notes cannot be more than 1000 characters']
  },
  clinicalNotes: [{
    note: String,
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    addedDate: {
      type: Date,
      default: Date.now
    },
    type: {
      type: String,
      enum: ['pre_visit', 'during_visit', 'post_visit', 'follow_up']
    }
  }],
  recurringInfo: {
    isRecurring: {
      type: Boolean,
      default: false
    },
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'yearly']
    },
    interval: {
      type: Number,
      min: 1
    },
    endDate: Date,
    parentAppointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment'
    }
  },
  waitlistInfo: {
    isWaitlisted: {
      type: Boolean,
      default: false
    },
    waitlistPosition: Number,
    preferredTimeSlots: [{
      start: Date,
      end: Date
    }],
    notificationPreferences: {
      sms: { type: Boolean, default: true },
      email: { type: Boolean, default: true },
      phone: { type: Boolean, default: false }
    }
  },
  reminders: [{
    type: {
      type: String,
      enum: ['sms', 'email', 'phone', 'app_notification']
    },
    sentAt: Date,
    scheduledFor: Date,
    status: {
      type: String,
      enum: ['pending', 'sent', 'failed', 'cancelled']
    },
    content: String
  }],
  checkInInfo: {
    checkedInAt: Date,
    checkedInBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    vitals: {
      bloodPressure: {
        systolic: Number,
        diastolic: Number
      },
      temperature: Number, // in Celsius
      heartRate: Number,
      weight: Number, // in kg
      height: Number, // in cm
      oxygenSaturation: Number
    }
  },
  billing: {
    estimatedCost: Number,
    actualCost: Number,
    insuranceCoverage: Number,
    copayAmount: Number,
    billingStatus: {
      type: String,
      enum: ['pending', 'submitted', 'approved', 'denied', 'paid']
    }
  },
  referral: {
    referringPhysician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Physician'
    },
    referralReason: String,
    referralDate: Date,
    referralNotes: String
  },
  cancelledInfo: {
    cancelledAt: Date,
    cancelledBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    cancellationReason: {
      type: String,
      enum: ['patient_request', 'physician_unavailable', 'emergency', 'weather', 'equipment_failure', 'other']
    },
    cancellationNotes: String
  },
  rescheduledInfo: {
    originalDateTime: Date,
    rescheduledAt: Date,
    rescheduledBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rescheduleReason: String
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
appointmentSchema.index({ appointmentId: 1 });
appointmentSchema.index({ patient: 1 });
appointmentSchema.index({ physician: 1 });
appointmentSchema.index({ scheduledDateTime: 1 });
appointmentSchema.index({ status: 1 });
appointmentSchema.index({ visitType: 1 });
appointmentSchema.index({ room: 1 });
appointmentSchema.index({ priority: 1 });
appointmentSchema.index({ 'recurringInfo.parentAppointment': 1 });
appointmentSchema.index({ scheduledDateTime: 1, physician: 1 }); // Compound index for schedule conflicts
appointmentSchema.index({ scheduledDateTime: 1, room: 1 }); // Compound index for room conflicts

// Generate appointment ID before saving
appointmentSchema.pre('save', async function(next) {
  if (!this.appointmentId) {
    const date = new Date();
    const year = date.getFullYear().toString().substr(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    // Find the latest appointment for today
    const latestAppointment = await this.constructor.findOne(
      { appointmentId: new RegExp(`^APT${year}${month}${day}`) },
      {},
      { sort: { appointmentId: -1 } }
    );
    
    let sequence = 1;
    if (latestAppointment) {
      const lastSequence = parseInt(latestAppointment.appointmentId.substr(-3));
      sequence = lastSequence + 1;
    }
    
    this.appointmentId = `APT${year}${month}${day}${String(sequence).padStart(3, '0')}`;
  }
  
  // Calculate end time if not provided
  if (!this.endDateTime && this.duration) {
    this.endDateTime = new Date(this.scheduledDateTime.getTime() + (this.duration * 60000));
  }
  
  next();
});

// Middleware to update last modified info
appointmentSchema.pre('save', function(next) {
  if (this.isModified() && !this.isNew) {
    this.lastModifiedBy = this.modifiedBy || this.createdBy;
  }
  next();
});

// Static method to check for conflicts
appointmentSchema.statics.checkConflicts = async function(physicianId, roomId, startTime, endTime, excludeAppointmentId = null) {
  const query = {
    $and: [
      {
        $or: [
          { physician: physicianId },
          { room: roomId }
        ]
      },
      {
        status: { $nin: ['cancelled', 'no_show', 'completed'] }
      },
      {
        $or: [
          {
            scheduledDateTime: { $lt: endTime },
            endDateTime: { $gt: startTime }
          }
        ]
      }
    ]
  };
  
  if (excludeAppointmentId) {
    query._id = { $ne: excludeAppointmentId };
  }
  
  return await this.find(query);
};

// Instance method to check if appointment can be cancelled
appointmentSchema.methods.canBeCancelled = function() {
  const now = new Date();
  const appointmentTime = new Date(this.scheduledDateTime);
  const timeDiff = appointmentTime.getTime() - now.getTime();
  const hoursDiff = timeDiff / (1000 * 3600);
  
  // Can be cancelled if more than 24 hours in advance and status allows
  return hoursDiff > 24 && ['scheduled', 'confirmed'].includes(this.status);
};

// Instance method to check if appointment can be rescheduled
appointmentSchema.methods.canBeRescheduled = function() {
  const now = new Date();
  const appointmentTime = new Date(this.scheduledDateTime);
  const timeDiff = appointmentTime.getTime() - now.getTime();
  const hoursDiff = timeDiff / (1000 * 3600);
  
  // Can be rescheduled if more than 2 hours in advance and status allows
  return hoursDiff > 2 && ['scheduled', 'confirmed'].includes(this.status);
};

// Virtual for appointment duration in hours
appointmentSchema.virtual('durationHours').get(function() {
  return this.duration / 60;
});

// Ensure virtuals are included in JSON output
appointmentSchema.set('toJSON', { virtuals: true });
appointmentSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Appointment', appointmentSchema);