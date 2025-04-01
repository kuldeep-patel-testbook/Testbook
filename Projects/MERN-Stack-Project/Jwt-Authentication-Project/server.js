// Import Required Modules
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log(`MongoDB Connected`))
.catch((err)=> console.log(err));

//User Schema & Model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

// Register Route
app.post('/api/register', async (req, res) => {
    try {
     const { name, email, password } = req.body;
     const hashPassword = await bcrypt.hash(password, 10);
     const newUser = new User({ name, email, password:hashPassword });
     await newUser.save();
     res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({error: 'Error registering user'})
    }
});

// Login Route
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ error: 'Email id does not exist or Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ error: 'Password something Missing or Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({ token, user: {id: user._id, name: user.name, email: user.email} });

    } catch (error) {
        res.status(500).json({error: 'Internal Server error'});
    }
});

// Middleware for verifying token
const authMiddleware =  async (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) {
        return res.status(401).json({ error: 'Access denied' });
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

//Protected Route
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: "Protected route accessed", user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
