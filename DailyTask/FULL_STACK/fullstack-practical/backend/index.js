const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = 5100;
const SECRET_KEY = 'PROVIDEAJSONWEBTOKEN';
app.use(cors());
app.use(express.json());

let users = [];

app.post('/api/users/register', async(req, res) => {
    try {
        const {username, password} = req.body;
        const existingUser = users.find(u=> u.username === username);
        if(existingUser) return res.status(400).json({msg: 'User already exists.'});

        const hashPassword = await bcrypt.hash(password, 10);
        users.push({username, password: hashPassword});

        res.status(201).json({msg: 'User Registered'});

    } catch (error) {
        res.status(500).json({msg: `Internal Server Error - ${error.message}`});
    }
});

app.post('/api/users/login', async(req, res) => {
    try {
        const { username, password} = req.body;
        const user = await users.find(u => u.username === username);
        if(!user) return res.status(400).json({msg: 'Invalid credentials'});

        const matched = await bcrypt.compare(password, user.password);
        if(!matched) return res.status(400).json({msg: "Invalid credentials"});

        const token = jwt.sign({username}, SECRET_KEY, {expiresIn: '1h'});
        res.status(201).json({token});

    } catch (error) {
        res.status(500).json({msg: `Internal Server Error - ${error.message}`});
    }
});

app.get('/api/users/dashboard', (req,res) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(' ')[1];
    if(!token) return res.status(401).json({msg: "No Token"});
    
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ msg: `Welcome ${decoded.username} to your dashboard`});
    } catch (error) {
        res.status(403).json({msg: `Internal Server Error - ${error.message}`});
    }
});

app.listen(PORT, () => {
    console.log(`Server Connecting at http://localhost:${PORT}`);
})