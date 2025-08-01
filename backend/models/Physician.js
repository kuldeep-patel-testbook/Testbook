const mongoose = require('mongoose');

const physicianSchema = new mongoose.Schema({
  physicianId: {
    type: String,
    unique: true,
    required: true
  },
  personalInfo: {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: [50, 'First name cannot be more than 50 characters']
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: [50, 'Last name cannot be more than 50 characters']
    },
    middleName: {
      type: String,
      trim: true,
      maxlength: [50, 'Middle name cannot be more than 50 characters']
    },
    title: {
      type: String,
      enum: ['Dr.', 'Prof.', 'Mr.', 'Ms.', 'Mrs.'],
      default: 'Dr.'
    },
    suffix: {
      type: String,
      trim: true,
      maxlength: [20, 'Suffix cannot be more than 20 characters']
    },
    dateOfBirth: {
      type: Date,
      validate: {
        validator: function(v) {
          return v <= new Date();
        },
        message: 'Date of birth cannot be in the future'
      }
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      lowercase: true
    }
  },
  contactInfo: {
    primaryPhone: {
      type: String,
      required: [true, 'Primary phone is required'],
      trim: true,
      match: [/^\+?[\d\s-()]+$/, 'Please enter a valid phone number']
    },
    secondaryPhone: {
      type: String,
      trim: true,
      match: [/^\+?[\d\s-()]+$/, 'Please enter a valid secondary phone number']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email'
      ]
    },
    emergencyContact: {
      name: String,
      relationship: String,
      phone: String
    }
  },
  address: {
    street: {
      type: String,
      required: [true, 'Street address is required'],
      trim: true,
      maxlength: [100, 'Street address cannot be more than 100 characters']
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
      maxlength: [50, 'City cannot be more than 50 characters']
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true,
      maxlength: [50, 'State cannot be more than 50 characters']
    },
    zipCode: {
      type: String,
      required: [true, 'ZIP code is required'],
      trim: true,
      match: [/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code']
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true,
      default: 'United States'
    }
  },
  professionalInfo: {
    licenseNumber: {
      type: String,
      required: [true, 'License number is required'],
      unique: true,
      trim: true,
      uppercase: true
    },
    licenseState: {
      type: String,
      required: [true, 'License state is required'],
      trim: true
    },
    licenseExpiryDate: {
      type: Date,
      required: [true, 'License expiry date is required']
    },
    deaNumber: {
      type: String,
      trim: true,
      uppercase: true,
      sparse: true
    },
    npiNumber: {
      type: String,
      required: [true, 'NPI number is required'],
      unique: true,
      match: [/^\d{10}$/, 'NPI number must be 10 digits']
    },
    boardCertifications: [{
      board: {
        type: String,
        required: true,
        trim: true
      },
      specialty: {
        type: String,
        required: true,
        trim: true
      },
      certificationDate: Date,
      expiryDate: Date,
      certificationNumber: String
    }]
  },
  specializations: [{
    specialty: {
      type: String,
      required: true,
      enum: [
        'anesthesiology', 'cardiology', 'dermatology', 'emergency_medicine',
        'endocrinology', 'family_medicine', 'gastroenterology', 'general_surgery',
        'geriatrics', 'gynecology', 'hematology', 'infectious_disease',
        'internal_medicine', 'nephrology', 'neurology', 'neurosurgery',
        'obstetrics', 'oncology', 'ophthalmology', 'orthopedics',
        'otolaryngology', 'pathology', 'pediatrics', 'psychiatry',
        'pulmonology', 'radiology', 'rheumatology', 'urology',
        'plastic_surgery', 'rehabilitation', 'pain_management'
      ]
    },
    subspecialty: String,
    isPrimary: {
      type: Boolean,
      default: false
    },
    yearsOfExperience: Number
  }],
  affiliations: [{
    hospitalName: {
      type: String,
      required: true,
      trim: true
    },
    department: {
      type: String,
      trim: true
    },
    position: {
      type: String,
      trim: true
    },
    affiliationType: {
      type: String,
      enum: ['staff', 'consultant', 'visiting', 'honorary', 'emeritus'],
      default: 'staff'
    },
    startDate: Date,
    endDate: Date,
    isActive: {
      type: Boolean,
      default: true
    },
    privileges: [String]
  }],
  education: [{
    institution: {
      type: String,
      required: true,
      trim: true
    },
    degree: {
      type: String,
      required: true,
      enum: ['MD', 'DO', 'MBBS', 'PhD', 'MS', 'BS', 'BA', 'Other']
    },
    field: String,
    graduationYear: {
      type: Number,
      min: 1900,
      max: new Date().getFullYear()
    },
    honors: String
  }],
  residencyTraining: [{
    program: {
      type: String,
      required: true,
      trim: true
    },
    institution: {
      type: String,
      required: true,
      trim: true
    },
    specialty: String,
    startYear: Number,
    endYear: Number,
    chiefResident: {
      type: Boolean,
      default: false
    }
  }],
  fellowshipTraining: [{
    program: {
      type: String,
      required: true,
      trim: true
    },
    institution: {
      type: String,
      required: true,
      trim: true
    },
    subspecialty: String,
    startYear: Number,
    endYear: Number
  }],
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
      },
      location: String,
      appointmentDuration: {
        type: Number,
        default: 30, // in minutes
        min: 5,
        max: 480
      },
      maxPatients: {
        type: Number,
        default: 20,
        min: 1
      }
    }],
    vacations: [{
      startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date,
        required: true
      },
      reason: String,
      isRecurring: {
        type: Boolean,
        default: false
      }
    }],
    holidays: [{
      date: Date,
      name: String,
      isRecurring: {
        type: Boolean,
        default: false
      }
    }]
  },
  preferences: {
    appointmentTypes: [String],
    patientAgeGroups: [{
      type: String,
      enum: ['pediatric', 'adolescent', 'adult', 'geriatric']
    }],
    languages: [String],
    consultationMethods: [{
      type: String,
      enum: ['in_person', 'telemedicine', 'phone', 'email']
    }],
    referralPreferences: {
      acceptsReferrals: {
        type: Boolean,
        default: true
      },
      referralTypes: [String],
      urgencyLevels: [{
        type: String,
        enum: ['routine', 'urgent', 'emergency']
      }]
    }
  },
  ratings: {
    averageRating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },
    totalReviews: {
      type: Number,
      default: 0
    },
    patientSatisfactionScore: Number
  },
  insurance: {
    malpracticeInsurance: {
      provider: String,
      policyNumber: String,
      coverageAmount: Number,
      expiryDate: Date
    },
    acceptedInsurances: [String]
  },
  documents: [{
    filename: String,
    originalName: String,
    documentType: {
      type: String,
      enum: ['license', 'certificate', 'insurance', 'resume', 'other']
    },
    uploadDate: {
      type: Date,
      default: Date.now
    },
    expiryDate: Date
  }],
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended', 'retired'],
    default: 'active'
  },
  isReferringPhysician: {
    type: Boolean,
    default: false
  },
  isInternalPhysician: {
    type: Boolean,
    default: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  terminationDate: {
    type: Date
  },
  notes: [{
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
      enum: ['administrative', 'clinical', 'personal', 'disciplinary']
    }
  }],
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
physicianSchema.index({ physicianId: 1 });
physicianSchema.index({ 'personalInfo.firstName': 1, 'personalInfo.lastName': 1 });
physicianSchema.index({ 'contactInfo.email': 1 });
physicianSchema.index({ 'professionalInfo.licenseNumber': 1 });
physicianSchema.index({ 'professionalInfo.npiNumber': 1 });
physicianSchema.index({ 'specializations.specialty': 1 });
physicianSchema.index({ status: 1 });
physicianSchema.index({ isReferringPhysician: 1 });
physicianSchema.index({ isInternalPhysician: 1 });

// Generate physician ID before saving
physicianSchema.pre('save', async function(next) {
  if (!this.physicianId) {
    const date = new Date();
    const year = date.getFullYear().toString().substr(-2);
    
    // Find the latest physician for this year
    const latestPhysician = await this.constructor.findOne(
      { physicianId: new RegExp(`^PHY${year}`) },
      {},
      { sort: { physicianId: -1 } }
    );
    
    let sequence = 1;
    if (latestPhysician) {
      const lastSequence = parseInt(latestPhysician.physicianId.substr(-4));
      sequence = lastSequence + 1;
    }
    
    this.physicianId = `PHY${year}${String(sequence).padStart(4, '0')}`;
  }
  next();
});

// Virtual for full name
physicianSchema.virtual('fullName').get(function() {
  const { title, firstName, middleName, lastName, suffix } = this.personalInfo;
  let name = `${title} ${firstName}`;
  if (middleName) name += ` ${middleName}`;
  name += ` ${lastName}`;
  if (suffix) name += ` ${suffix}`;
  return name;
});

// Virtual for primary specialty
physicianSchema.virtual('primarySpecialty').get(function() {
  const primary = this.specializations.find(spec => spec.isPrimary);
  return primary ? primary.specialty : this.specializations[0]?.specialty;
});

// Virtual for years of experience
physicianSchema.virtual('totalExperience').get(function() {
  const currentYear = new Date().getFullYear();
  const oldestTraining = Math.min(
    ...this.residencyTraining.map(r => r.startYear).filter(Boolean),
    ...this.fellowshipTraining.map(f => f.startYear).filter(Boolean)
  );
  return oldestTraining ? currentYear - oldestTraining : 0;
});

// Static method to find physicians by specialty
physicianSchema.statics.findBySpecialty = function(specialty) {
  return this.find({ 
    'specializations.specialty': specialty,
    status: 'active'
  });
};

// Static method to search physicians
physicianSchema.statics.searchPhysicians = function(searchTerm) {
  return this.find({
    $and: [
      { status: 'active' },
      {
        $or: [
          { 'personalInfo.firstName': { $regex: searchTerm, $options: 'i' } },
          { 'personalInfo.lastName': { $regex: searchTerm, $options: 'i' } },
          { 'specializations.specialty': { $regex: searchTerm, $options: 'i' } },
          { 'affiliations.hospitalName': { $regex: searchTerm, $options: 'i' } }
        ]
      }
    ]
  });
};

// Instance method to check availability
physicianSchema.methods.isAvailable = function(dateTime, duration = 30) {
  const requestedDate = new Date(dateTime);
  const dayOfWeek = requestedDate.getDay();
  const timeStr = requestedDate.toTimeString().substr(0, 5); // HH:mm format
  
  // Check if there's a vacation or holiday
  const isOnVacation = this.availability.vacations.some(vacation => 
    requestedDate >= vacation.startDate && requestedDate <= vacation.endDate
  );
  
  if (isOnVacation) return false;
  
  const isHoliday = this.availability.holidays.some(holiday => 
    holiday.date.toDateString() === requestedDate.toDateString()
  );
  
  if (isHoliday) return false;
  
  // Check regular schedule
  const daySchedule = this.availability.schedule.find(s => s.dayOfWeek === dayOfWeek);
  if (!daySchedule) return false;
  
  return timeStr >= daySchedule.startTime && timeStr <= daySchedule.endTime;
};

// Instance method to get available time slots
physicianSchema.methods.getAvailableSlots = function(date, duration = 30) {
  const requestedDate = new Date(date);
  const dayOfWeek = requestedDate.getDay();
  
  if (!this.isAvailable(requestedDate, duration)) return [];
  
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
        available: true // This would need to be checked against existing appointments
      });
    }
    currentTime = new Date(currentTime.getTime() + (daySchedule.appointmentDuration * 60000));
  }
  
  return slots;
};

// Ensure virtuals are included in JSON output
physicianSchema.set('toJSON', { virtuals: true });
physicianSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Physician', physicianSchema);