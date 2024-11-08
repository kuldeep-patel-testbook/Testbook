// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
