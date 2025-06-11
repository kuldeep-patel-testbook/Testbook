const express = require('express');
const app = express();
const connectDB = require('./config/dbconn');
connectDB();
const cors = require('cors');
const path = require('path');

const authuserRoutes = require('./routes/authuserRoutes');
const patientRoutes = require('./routes/patientRoutes');
const reportRoutes = require('./routes/reportRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const adminRoutes = require('./routes/adminRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const logRoutes = require('./routes/logRoutes');


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

app.use('/uploads/reports', express.static('uploads/reports'));

app.use('/api/auth', authuserRoutes);
app.use('/api/admin', adminRoutes);

// Register Routes
app.use('/api/patients', patientRoutes);

// Report Routes
app.use('/api/reports', reportRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use('/api/appointments', appointmentRoutes);
app.use('/api/logs', logRoutes);
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server connecting at http://localhost:${PORT}`);
});
