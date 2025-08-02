const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import models
const User = require('../models/User');
const Patient = require('../models/Patient');
const Physician = require('../models/Physician');
const Procedure = require('../models/Procedure');
const Resource = require('../models/Resource');
const Appointment = require('../models/Appointment');

// Sample data
const users = [
  {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@hospital.com',
    password: 'password',
    role: 'admin',
    employeeId: 'EMP001',
    department: 'Administration',
    phone: '555-0001',
    permissions: [
      { module: 'patients', actions: ['create', 'read', 'update', 'delete'] },
      { module: 'appointments', actions: ['create', 'read', 'update', 'delete'] },
      { module: 'procedures', actions: ['create', 'read', 'update', 'delete'] },
      { module: 'physicians', actions: ['create', 'read', 'update', 'delete'] },
      { module: 'reports', actions: ['create', 'read', 'update', 'delete'] },
      { module: 'settings', actions: ['create', 'read', 'update', 'delete'] }
    ]
  },
  {
    firstName: 'Staff',
    lastName: 'Member',
    email: 'staff@hospital.com',
    password: 'password',
    role: 'receptionist',
    employeeId: 'EMP002',
    department: 'Reception',
    phone: '555-0002',
    permissions: [
      { module: 'patients', actions: ['create', 'read', 'update'] },
      { module: 'appointments', actions: ['create', 'read', 'update'] }
    ]
  }
];

const physicians = [
  {
    personalInfo: {
      firstName: 'John',
      lastName: 'Smith',
      title: 'Dr.',
      dateOfBirth: new Date('1975-03-15'),
      gender: 'male'
    },
    contactInfo: {
      primaryPhone: '555-0101',
      email: 'dr.smith@hospital.com'
    },
    address: {
      street: '123 Medical Drive',
      city: 'Healthcare City',
      state: 'CA',
      zipCode: '90210',
      country: 'United States'
    },
    professionalInfo: {
      licenseNumber: 'CA123456',
      licenseState: 'California',
      licenseExpiryDate: new Date('2025-12-31'),
      npiNumber: '1234567890'
    },
    specializations: [
      { specialty: 'cardiology', isPrimary: true, yearsOfExperience: 15 }
    ],
    affiliations: [
      {
        hospitalName: 'City General Hospital',
        department: 'Cardiology',
        position: 'Senior Cardiologist',
        affiliationType: 'staff',
        startDate: new Date('2010-01-01'),
        isActive: true
      }
    ],
    availability: {
      schedule: [
        { dayOfWeek: 1, startTime: '09:00', endTime: '17:00', appointmentDuration: 30 },
        { dayOfWeek: 2, startTime: '09:00', endTime: '17:00', appointmentDuration: 30 },
        { dayOfWeek: 3, startTime: '09:00', endTime: '17:00', appointmentDuration: 30 },
        { dayOfWeek: 4, startTime: '09:00', endTime: '17:00', appointmentDuration: 30 },
        { dayOfWeek: 5, startTime: '09:00', endTime: '15:00', appointmentDuration: 30 }
      ]
    },
    isInternalPhysician: true
  },
  {
    personalInfo: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      title: 'Dr.',
      dateOfBirth: new Date('1980-07-22'),
      gender: 'female'
    },
    contactInfo: {
      primaryPhone: '555-0102',
      email: 'dr.johnson@hospital.com'
    },
    address: {
      street: '456 Healthcare Blvd',
      city: 'Healthcare City',
      state: 'CA',
      zipCode: '90210',
      country: 'United States'
    },
    professionalInfo: {
      licenseNumber: 'CA654321',
      licenseState: 'California',
      licenseExpiryDate: new Date('2025-12-31'),
      npiNumber: '0987654321'
    },
    specializations: [
      { specialty: 'family_medicine', isPrimary: true, yearsOfExperience: 10 }
    ],
    affiliations: [
      {
        hospitalName: 'City General Hospital',
        department: 'Family Medicine',
        position: 'Family Physician',
        affiliationType: 'staff',
        startDate: new Date('2015-06-01'),
        isActive: true
      }
    ],
    availability: {
      schedule: [
        { dayOfWeek: 1, startTime: '08:00', endTime: '16:00', appointmentDuration: 20 },
        { dayOfWeek: 2, startTime: '08:00', endTime: '16:00', appointmentDuration: 20 },
        { dayOfWeek: 3, startTime: '08:00', endTime: '16:00', appointmentDuration: 20 },
        { dayOfWeek: 4, startTime: '08:00', endTime: '16:00', appointmentDuration: 20 },
        { dayOfWeek: 5, startTime: '08:00', endTime: '14:00', appointmentDuration: 20 }
      ]
    },
    isInternalPhysician: true
  }
];

const procedures = [
  {
    procedureCode: 'CONS01',
    name: 'General Consultation',
    description: 'Standard medical consultation',
    category: 'general_medicine',
    estimatedDuration: 30,
    cost: { baseCost: 150, currency: 'USD' },
    requiredSpecialties: [
      { specialty: 'General Medicine', role: 'primary', isRequired: true }
    ]
  },
  {
    procedureCode: 'ECG01',
    name: 'Electrocardiogram',
    description: 'Heart rhythm and electrical activity test',
    category: 'cardiology',
    estimatedDuration: 15,
    cost: { baseCost: 200, currency: 'USD' },
    requiredEquipment: [
      { equipment: 'ECG Machine', quantity: 1, isOptional: false }
    ],
    requiredSpecialties: [
      { specialty: 'Cardiology', role: 'primary', isRequired: true }
    ]
  },
  {
    procedureCode: 'XRAY01',
    name: 'X-Ray Examination',
    description: 'Diagnostic imaging using X-rays',
    category: 'radiology',
    estimatedDuration: 20,
    cost: { baseCost: 100, currency: 'USD' },
    requiredEquipment: [
      { equipment: 'X-Ray Machine', quantity: 1, isOptional: false }
    ]
  }
];

const resources = [
  {
    name: 'Room 101',
    description: 'General examination room',
    type: 'room',
    category: 'examination_room',
    location: {
      building: 'Main Building',
      floor: '1',
      roomNumber: '101',
      department: 'General Medicine'
    },
    specifications: {
      capacity: 3,
      dimensions: { length: 12, width: 10, area: 120 }
    },
    availability: {
      schedule: [
        { dayOfWeek: 1, startTime: '08:00', endTime: '18:00' },
        { dayOfWeek: 2, startTime: '08:00', endTime: '18:00' },
        { dayOfWeek: 3, startTime: '08:00', endTime: '18:00' },
        { dayOfWeek: 4, startTime: '08:00', endTime: '18:00' },
        { dayOfWeek: 5, startTime: '08:00', endTime: '16:00' }
      ]
    }
  },
  {
    name: 'Room 201',
    description: 'Cardiology examination room',
    type: 'room',
    category: 'examination_room',
    location: {
      building: 'Main Building',
      floor: '2',
      roomNumber: '201',
      department: 'Cardiology'
    },
    specifications: {
      capacity: 4,
      dimensions: { length: 14, width: 12, area: 168 }
    },
    availability: {
      schedule: [
        { dayOfWeek: 1, startTime: '08:00', endTime: '18:00' },
        { dayOfWeek: 2, startTime: '08:00', endTime: '18:00' },
        { dayOfWeek: 3, startTime: '08:00', endTime: '18:00' },
        { dayOfWeek: 4, startTime: '08:00', endTime: '18:00' },
        { dayOfWeek: 5, startTime: '08:00', endTime: '16:00' }
      ]
    }
  }
];

const patients = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    dateOfBirth: new Date('1990-05-10'),
    gender: 'female',
    contactInfo: {
      phone: '555-1001',
      email: 'jane.doe@email.com'
    },
    address: {
      street: '789 Patient St',
      city: 'Healthcare City',
      state: 'CA',
      zipCode: '90210',
      country: 'United States'
    },
    emergencyContact: {
      name: 'John Doe',
      relationship: 'Spouse',
      phone: '555-1002'
    },
    identificationInfo: {
      insuranceNumber: 'INS123456',
      insuranceProvider: 'Blue Cross Blue Shield'
    },
    preferredLanguage: 'English'
  },
  {
    firstName: 'Robert',
    lastName: 'Smith',
    dateOfBirth: new Date('1985-12-03'),
    gender: 'male',
    contactInfo: {
      phone: '555-1003',
      email: 'robert.smith@email.com'
    },
    address: {
      street: '456 Wellness Ave',
      city: 'Healthcare City',
      state: 'CA',
      zipCode: '90210',
      country: 'United States'
    },
    emergencyContact: {
      name: 'Mary Smith',
      relationship: 'Spouse',
      phone: '555-1004'
    },
    identificationInfo: {
      insuranceNumber: 'INS789012',
      insuranceProvider: 'Aetna'
    },
    preferredLanguage: 'English'
  }
];

// Seed function
const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Promise.all([
      User.deleteMany({}),
      Patient.deleteMany({}),
      Physician.deleteMany({}),
      Procedure.deleteMany({}),
      Resource.deleteMany({}),
      Appointment.deleteMany({})
    ]);
    console.log('✅ Existing data cleared');

    // Hash passwords for users
    for (let user of users) {
      const salt = await bcrypt.genSalt(12);
      user.password = await bcrypt.hash(user.password, salt);
    }

    // Create users
    console.log('👥 Creating users...');
    const createdUsers = await User.insertMany(users);
    console.log(`✅ Created ${createdUsers.length} users`);

    // Set createdBy for other entities
    const adminUser = createdUsers.find(user => user.role === 'admin');

    // Create physicians
    console.log('👨‍⚕️ Creating physicians...');
    const physiciansWithCreator = physicians.map(physician => ({
      ...physician,
      createdBy: adminUser._id
    }));
    const createdPhysicians = await Physician.insertMany(physiciansWithCreator);
    console.log(`✅ Created ${createdPhysicians.length} physicians`);

    // Create procedures
    console.log('🏥 Creating procedures...');
    const proceduresWithCreator = procedures.map(procedure => ({
      ...procedure,
      createdBy: adminUser._id
    }));
    const createdProcedures = await Procedure.insertMany(proceduresWithCreator);
    console.log(`✅ Created ${createdProcedures.length} procedures`);

    // Create resources
    console.log('🏢 Creating resources...');
    const resourcesWithCreator = resources.map(resource => ({
      ...resource,
      createdBy: adminUser._id
    }));
    const createdResources = await Resource.insertMany(resourcesWithCreator);
    console.log(`✅ Created ${createdResources.length} resources`);

    // Create patients
    console.log('🏥 Creating patients...');
    const patientsWithCreator = patients.map(patient => ({
      ...patient,
      registeredBy: adminUser._id
    }));
    const createdPatients = await Patient.insertMany(patientsWithCreator);
    console.log(`✅ Created ${createdPatients.length} patients`);

    // Create sample appointments
    console.log('📅 Creating sample appointments...');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(10, 0, 0, 0);

    const sampleAppointments = [
      {
        patient: createdPatients[0]._id,
        physician: createdPhysicians[0]._id,
        procedure: createdProcedures[0]._id,
        scheduledDateTime: tomorrow,
        endDateTime: new Date(tomorrow.getTime() + (30 * 60000)),
        duration: 30,
        visitType: 'consultation',
        room: createdResources[0]._id,
        reasonForVisit: 'Annual checkup',
        priority: 'normal',
        createdBy: adminUser._id
      },
      {
        patient: createdPatients[1]._id,
        physician: createdPhysicians[1]._id,
        procedure: createdProcedures[1]._id,
        scheduledDateTime: new Date(tomorrow.getTime() + (60 * 60000)), // 1 hour later
        endDateTime: new Date(tomorrow.getTime() + (90 * 60000)),
        duration: 30,
        visitType: 'procedure',
        room: createdResources[1]._id,
        reasonForVisit: 'Heart examination',
        priority: 'high',
        createdBy: adminUser._id
      }
    ];

    const createdAppointments = await Appointment.insertMany(sampleAppointments);
    console.log(`✅ Created ${createdAppointments.length} appointments`);

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\n📋 Summary:');
    console.log(`- Users: ${createdUsers.length}`);
    console.log(`- Physicians: ${createdPhysicians.length}`);
    console.log(`- Procedures: ${createdProcedures.length}`);
    console.log(`- Resources: ${createdResources.length}`);
    console.log(`- Patients: ${createdPatients.length}`);
    console.log(`- Appointments: ${createdAppointments.length}`);

    console.log('\n🔐 Login Credentials:');
    console.log('Admin: admin@hospital.com / password');
    console.log('Staff: staff@hospital.com / password');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n📦 Database connection closed');
    process.exit(0);
  }
};

// Run seeding if called directly
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;