const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "No token access denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId;
        next();
    } catch (err) {
        console.error("JWT verification error:", err.message);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = verifyToken;