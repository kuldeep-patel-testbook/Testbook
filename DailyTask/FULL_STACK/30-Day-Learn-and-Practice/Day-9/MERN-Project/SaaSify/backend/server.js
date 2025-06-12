const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth/', authRoutes);
app.use('/api/subscription', subscriptionRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`Mongo DB Connected`);
        app.listen(PORT, () => {
            console.log(`server connecting at http://localhost:${PORT}`);
            console.log("MONGO_URI:", process.env.MONGO_URI);
        });
    })
    .catch(err => {
        console.log(`Mongo DB Connection Error: ${err.message}`);
    });



