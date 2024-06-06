const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const rootConfig = require('../rootConfig');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, rootConfig.jwtSecret, (error, decodedToken) => {
            
            if (error) {
                console.log("Not authorized", error.message);
                res.redirect('/login');
            } else {
                req.user = decodedToken;
                next();
            }
        });
    } else {
        console.log("Not authorized");
        res.redirect('/login');
    }
};

const checkAdmin = async (req, res, next) => { 
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, rootConfig.jwtSecret, async (error, decodedToken) => {

            if(error) {
                console.log("decodeToken", error.message);
                res.redirect('/login');
            } else {
                const user = await User.findById(decodedToken.id);

                if(user && user.role === 'admin') {
                    next();
                } else {
                    res.redirect('/');
                }
            }
        });
    } else {
        res.redirect('/login');
    }
};


module.exports = { requireAuth, checkAdmin };