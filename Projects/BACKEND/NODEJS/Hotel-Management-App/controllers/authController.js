const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const rootConfig = require('../rootConfig');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, rootConfig.jwtSecret, { expiresIn: maxAge });
};

const contact = (req, res) => {
    const isLoggedIn = !!req.cookies.jwt;
    res.render('contact', { isLoggedIn, user: req.user });
}

const signup = (req, res) => {
    const isLoggedIn = !!req.cookies.jwt;
    res.render('signup', { isLoggedIn, user: req.user });
}

const login = (req, res) => {
    const isLoggedIn = !!req.cookies.jwt;
    res.render('login', { isLoggedIn, user: req.user });
}

const adminlogin = (req, res) => {
    const isLoggedIn = !!req.cookies.jwt;
    res.render('adminlogin', { isLoggedIn, user: req.user });
}


const signupPost = async (req, res) => {
    const { username, email, password, cpassword, phone, city, state, address } = req.body;

    try {
        const user = await User.create({ username, email, password, cpassword, phone, city, state, address });
        const token = createToken(user._id);

        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        console.log("Signup user successfully...");
        return res.redirect('/');
        //res.status(201).json({ status: "Sucess", message: "User Save Successfully", user: user._id });

    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log("Signup user error...");
    }
};

const loginPost = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        //res.status(200).json({ status: "Sucess", message: "user login successfully", user: user._id });
        if (user.isAdmin === true) {
            return res.redirect('/admin');
        } else {
            return res.redirect('/');
        }

        //res.redirect('/');

    } catch (error) {
        console.error("custom", error.message);
        res.status(400).json({ error: error.message });
    }

};

const logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    console.log("logout successfully");
    res.redirect('/');
};

module.exports = { signup, login, signupPost, loginPost, logout, contact, adminlogin};