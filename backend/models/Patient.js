const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientId: {
    type: String,
    unique: true,
    required: true
  },
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
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required'],
    validate: {
      validator: function(v) {
        return v <= new Date();
      },
      message: 'Date of birth cannot be in the future'
    }
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['male', 'female', 'other'],
    lowercase: true
  },
  contactInfo: {
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^\+?[\d\s-()]+$/, 'Please enter a valid phone number']
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email'
      ]
    },
    alternatePhone: {
      type: String,
      trim: true,
      match: [/^\+?[\d\s-()]+$/, 'Please enter a valid alternate phone number']
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
  emergencyContact: {
    name: {
      type: String,
      required: [true, 'Emergency contact name is required'],
      trim: true,
      maxlength: [100, 'Emergency contact name cannot be more than 100 characters']
    },
    relationship: {
      type: String,
      required: [true, 'Emergency contact relationship is required'],
      trim: true,
      maxlength: [50, 'Relationship cannot be more than 50 characters']
    },
    phone: {
      type: String,
      required: [true, 'Emergency contact phone is required'],
      trim: true,
      match: [/^\+?[\d\s-()]+$/, 'Please enter a valid emergency contact phone number']
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid emergency contact email'
      ]
    }
  },
  identificationInfo: {
    nationalId: {
      type: String,
      trim: true,
      sparse: true
    },
    insuranceNumber: {
      type: String,
      trim: true,
      sparse: true
    },
    insuranceProvider: {
      type: String,
      trim: true
    },
    insurancePlan: {
      type: String,
      trim: true
    },
    policyHolderName: {
      type: String,
      trim: true
    },
    groupNumber: {
      type: String,
      trim: true
    }
  },
  primaryPhysician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Physician'
  },
  preferredLanguage: {
    type: String,
    trim: true,
    default: 'English'
  },
  medicalHistory: {
    allergies: [{
      allergen: String,
      reaction: String,
      severity: {
        type: String,
        enum: ['mild', 'moderate', 'severe']
      }
    }],
    medications: [{
      name: String,
      dosage: String,
      frequency: String,
      prescribedBy: String,
      startDate: Date,
      endDate: Date
    }],
    conditions: [{
      condition: String,
      diagnosedDate: Date,
      status: {
        type: String,
        enum: ['active', 'resolved', 'chronic']
      }
    }],
    surgeries: [{
      procedure: String,
      date: Date,
      surgeon: String,
      hospital: String
    }]
  },
  documents: [{
    filename: String,
    originalName: String,
    mimetype: String,
    size: Number,
    uploadDate: {
      type: Date,
      default: Date.now
    },
    documentType: {
      type: String,
      enum: ['id_proof', 'insurance_card', 'medical_record', 'other']
    },
    description: String
  }],
  status: {
    type: String,
    enum: ['active', 'inactive', 'deceased'],
    default: 'active'
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  lastVisitDate: {
    type: Date
  },
  registeredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
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
    }
  }]
}, {
  timestamps: true
});

// Indexes for better query performance
patientSchema.index({ patientId: 1 });
patientSchema.index({ firstName: 1, lastName: 1 });
patientSchema.index({ 'contactInfo.phone': 1 });
patientSchema.index({ 'contactInfo.email': 1 });
patientSchema.index({ dateOfBirth: 1 });
patientSchema.index({ status: 1 });
patientSchema.index({ registrationDate: -1 });
patientSchema.index({ lastVisitDate: -1 });

// Generate patient ID before saving
patientSchema.pre('save', async function(next) {
  if (!this.patientId) {
    const date = new Date();
    const year = date.getFullYear().toString().substr(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    
    // Find the latest patient for this month
    const latestPatient = await this.constructor.findOne(
      { patientId: new RegExp(`^PT${year}${month}`) },
      {},
      { sort: { patientId: -1 } }
    );
    
    let sequence = 1;
    if (latestPatient) {
      const lastSequence = parseInt(latestPatient.patientId.substr(-4));
      sequence = lastSequence + 1;
    }
    
    this.patientId = `PT${year}${month}${String(sequence).padStart(4, '0')}`;
  }
  next();
});

// Virtual for full name
patientSchema.virtual('fullName').get(function() {
  return this.middleName 
    ? `${this.firstName} ${this.middleName} ${this.lastName}`
    : `${this.firstName} ${this.lastName}`;
});

// Virtual for age calculation
patientSchema.virtual('age').get(function() {
  const today = new Date();
  const birthDate = new Date(this.dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
});

// Ensure virtuals are included in JSON output
patientSchema.set('toJSON', { virtuals: true });
patientSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Patient', patientSchema);