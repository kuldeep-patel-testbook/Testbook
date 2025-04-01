const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

require('./config/conn');

// Middleware
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    console.log('✅ Server is running...');
    res.send("✅ API is running");
    
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`server listening at port:http://localhost:${PORT}`);
});