# Patient Scheduler - Hospital Management System

A comprehensive MERN stack application for managing patient registration, appointment scheduling, and hospital resources. This system follows modern healthcare workflow requirements with calendar-based scheduling, patient search, and masters management.

## 🌟 Features

### 📋 Patient Management
- **Patient Registration**: Complete patient registration with demographics, contact info, emergency contacts, and insurance details
- **Advanced Search**: Search patients by ID, name, phone, email with filters
- **Demographics View**: Comprehensive patient profile with medical history and documents
- **Document Upload**: Support for ID proof, insurance cards, and medical records

### 📅 Appointment Scheduling
- **Calendar-Based Interface**: Daily, weekly, and monthly calendar views
- **Drag & Drop Scheduling**: Intuitive appointment management
- **Conflict Detection**: Automatic detection of physician and room conflicts
- **Status Management**: Complete appointment lifecycle (scheduled → checked-in → completed)
- **Recurring Appointments**: Support for follow-up and recurring visits

### 👨‍⚕️ Masters Management
- **Procedure Master**: Manage procedures with codes, durations, and costs
- **Physician Master**: Complete physician profiles with specializations and availability
- **Resource Management**: Rooms, equipment, and facility management
- **Availability Tracking**: Real-time resource and physician availability

### 🔐 User Management & Security
- **Role-Based Access Control**: Admin, Scheduler, Physician, Nurse, Receptionist roles
- **Granular Permissions**: Module and action-based permission system
- **JWT Authentication**: Secure token-based authentication
- **Audit Logging**: Complete activity tracking

## 🏗️ Architecture

```
Frontend (React 18)
├── React Router (Navigation)
├── React Query (State Management)
├── Styled Components (Styling)
├── React Hook Form (Form Management)
├── React Big Calendar (Calendar Views)
└── Axios (HTTP Client)

Backend (Node.js/Express)
├── Express.js (Web Framework)
├── MongoDB + Mongoose (Database)
├── JWT (Authentication)
├── Multer (File Upload)
├── Express Validator (Input Validation)
└── CORS, Helmet, Rate Limiting (Security)
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd patient-scheduler
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install all dependencies (backend + frontend)
npm run install-deps
```

3. **Setup environment variables**

Create `backend/.env`:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/patient_scheduler
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRE=30d

# Optional: Email configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Optional: SMS configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

# File upload
MAX_FILE_SIZE=5000000
FILE_UPLOAD_PATH=./uploads
```

Create `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. **Start MongoDB**
```bash
# If using MongoDB locally
mongod

# Or if using MongoDB as a service
sudo systemctl start mongod
```

5. **Run the application**
```bash
# Development mode (starts both backend and frontend)
npm run dev

# Or start separately
npm run server  # Backend only
npm run client  # Frontend only
```

6. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/api/health

## 🔑 Default Login Credentials

### Admin User
- **Email**: admin@hospital.com
- **Password**: password
- **Permissions**: Full system access

### Staff User
- **Email**: staff@hospital.com
- **Password**: password
- **Permissions**: Patient registration, appointment scheduling

> ⚠️ **Important**: Change these credentials in production!

## 📱 Application Flow

### For Front Desk Staff (Primary Use Case)

1. **Patient Check-in Process**:
   ```
   Calendar View → Select Time Slot → Search/Select Patient → Create Appointment
   ```

2. **New Patient Registration**:
   ```
   Calendar View → Add Appointment → "Add New Patient" → Registration Form → Schedule Appointment
   ```

3. **Daily Schedule Management**:
   ```
   Calendar View → View Day's Appointments → Check-in Patients → Update Status
   ```

### Calendar-First Approach
- Start with calendar view to see available slots
- Front desk staff primarily works from the calendar
- Patient registration is triggered from appointment creation
- Search patients when scheduling to avoid duplicates

## 🎨 UI/UX Features

### 📅 Calendar Interface
- **Color-coded appointments** by status
- **Priority indicators** with border colors
- **Drag and drop** for rescheduling
- **Quick actions** for check-in, cancel, reschedule
- **Multiple views**: Day, Week, Month
- **Real-time updates**

### 🔍 Patient Search
- **Instant search** with auto-complete
- **Multiple search criteria**: ID, name, phone, email
- **Filter options**: Status, date range, age
- **Quick preview** with essential info
- **Recent patients** for quick access

### 📋 Patient Registration
- **Step-by-step wizard** interface
- **Real-time validation**
- **Duplicate detection**
- **Document upload** with preview
- **Auto-generated patient ID**

## 🗂️ Database Schema

### Key Collections

#### Patients
```javascript
{
  patientId: "PT24010001",
  firstName: "John",
  lastName: "Doe",
  dateOfBirth: "1985-06-15",
  contactInfo: { phone, email },
  address: { street, city, state, zipCode },
  emergencyContact: { name, phone, relationship },
  identificationInfo: { insuranceNumber, provider },
  medicalHistory: { allergies, medications, conditions },
  documents: [{ filename, type, uploadDate }]
}
```

#### Appointments
```javascript
{
  appointmentId: "APT24010001",
  patient: ObjectId,
  physician: ObjectId,
  scheduledDateTime: "2024-01-15T10:00:00Z",
  duration: 30,
  visitType: "consultation",
  status: "scheduled",
  priority: "normal",
  room: ObjectId,
  reasonForVisit: "Annual checkup"
}
```

#### Physicians
```javascript
{
  physicianId: "PHY24001",
  personalInfo: { firstName, lastName, title },
  contactInfo: { primaryPhone, email },
  professionalInfo: { licenseNumber, npiNumber },
  specializations: [{ specialty, isPrimary }],
  availability: { schedule, vacations }
}
```

## 🛡️ Security Features

- **JWT Authentication** with refresh tokens
- **Role-based permissions** (RBAC)
- **Input validation** and sanitization
- **Rate limiting** on API endpoints
- **File upload restrictions**
- **CORS configuration**
- **Helmet security headers**
- **Audit logging** for sensitive operations

## 📊 API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile

### Patient Endpoints
- `POST /api/patients` - Register new patient
- `GET /api/patients/search` - Search patients
- `GET /api/patients/:id` - Get patient details
- `PUT /api/patients/:id` - Update patient
- `GET /api/patients/:id/demographics` - Get patient demographics

### Appointment Endpoints
- `POST /api/appointments` - Create appointment
- `GET /api/appointments` - Get appointments (with filters)
- `PUT /api/appointments/:id` - Update appointment
- `POST /api/appointments/:id/checkin` - Check-in patient
- `GET /api/appointments/slots/available` - Get available time slots

### Masters Endpoints
- `GET /api/procedures` - Get procedures
- `GET /api/physicians` - Get physicians
- `GET /api/resources` - Get resources

## 🚀 Deployment

### Production Build
```bash
# Build frontend
npm run build

# Start production server
npm start
```

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=mongodb://your-production-mongo-url
JWT_SECRET=your-very-secure-production-secret
FRONTEND_URL=https://your-domain.com
```

### Docker Deployment
```dockerfile
# Dockerfile included for containerized deployment
docker build -t patient-scheduler .
docker run -p 5000:5000 patient-scheduler
```

## 🧪 Testing

```bash
# Run backend tests
cd backend && npm test

# Run frontend tests
cd frontend && npm test

# Run integration tests
npm run test:integration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email: support@hospital-scheduler.com
- 📖 Documentation: [Wiki](wiki-url)
- 🐛 Issues: [GitHub Issues](issues-url)

## 🗺️ Roadmap

### Phase 2 Features
- [ ] Telehealth integration
- [ ] Patient self-scheduling portal
- [ ] SMS/Email reminders
- [ ] Advanced reporting and analytics
- [ ] Mobile app for physicians
- [ ] Integration with EHR systems
- [ ] AI-powered scheduling optimization

### Phase 3 Features
- [ ] Multi-location support
- [ ] Advanced billing integration
- [ ] Inventory management
- [ ] Quality metrics tracking
- [ ] Patient satisfaction surveys

---

**Built with ❤️ for Healthcare Professionals**