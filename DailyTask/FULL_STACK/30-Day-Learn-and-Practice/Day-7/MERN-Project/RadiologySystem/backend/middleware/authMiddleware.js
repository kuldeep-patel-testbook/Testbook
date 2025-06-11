const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access denied, no token" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};

const checkRole = (role) => (req, res, next) => {
    if (req.user?.role !== role) {
        return res.status(403).json({ message: "Forbidden: insufficient role" });
    }
    next();
};

module.exports = {verifyToken, checkRole};