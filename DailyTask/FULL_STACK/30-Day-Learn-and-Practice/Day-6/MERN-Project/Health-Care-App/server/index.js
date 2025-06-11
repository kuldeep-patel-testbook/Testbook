const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const connectDB = require('./config/conn');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const noteRoutes = require("./routes/noteRoutes");
const appointmentsRoutes = require('./routes/appointmentRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);

app.use("/api/notes", noteRoutes);
app.use("/api/appointments", appointmentsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})
