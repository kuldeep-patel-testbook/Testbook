const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const surveyRoutes = require('./routes/surveyRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.use('/', surveyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
