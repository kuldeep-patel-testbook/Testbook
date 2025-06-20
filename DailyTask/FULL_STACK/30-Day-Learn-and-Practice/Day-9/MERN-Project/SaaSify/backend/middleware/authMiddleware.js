const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ message: 'No token' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token', error: error.message });
    }
};

module.exports = authMiddleware;