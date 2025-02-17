const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3200;
const app = express();
//DB Connection
require('./config/conn');
const userRoutes = require('./routes/userRoutes');

//use of middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use('/api/users/', userRoutes);

app.listen(PORT, ()=> {
    try {
        console.log(`server connecting at ${PORT}`);
    } catch (error) {
        console.log(`server error connecting issue... ${error}`);
    }
})