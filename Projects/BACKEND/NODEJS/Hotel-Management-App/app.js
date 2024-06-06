const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const adminRoutes = require('./routes/adminRoutes');
const connectDB = require('./config/dbConnection');
const PORT = 3100;
const createAdminUser = require('./initAdmin');
connectDB();
createAdminUser();

const app = express();
app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('view engine', 'ejs');


app.use(authRoutes);
app.use(hotelRoutes);
app.use(adminRoutes);


app.use(function(req, res, next) {
    res.status(404).render("404-page");
});

app.listen(PORT, (error)=> {
    try {
        console.log(`server listening port at ${PORT}`);
    } catch (error) {
        console.error(`server not listening port at ${PORT}`);
    }
});
