const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const { ensureLoggedIn  } = require('connect-ensure-login');
const user = require('./user');
const PORT = 3002;
const path = require('path');

app.set('view engine', 'ejs'); // Replace 'ejs' with your preferred enginse

app.set("views", path.join(__dirname, 'views'));

app.use(session({
    secret : 'qwerty_asdf_jkl',
    resave : false,
    saveUninitialized : true,
    cookie : { maxAge : 60 * 60 * 1000 }
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(user.createStrategy());

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


app.get('/',(req,res) =>{
    //res.sendFile(path.join(__dirname,'/static/index.html'))
    res.render('index');
});

app.get('/login',(req,res)=>{
    //res.sendFile(path.join(__dirname,'/static/login.html'))
    res.render('login');
});


app.get('/dashboard', ensureLoggedIn('/login'), (req, res) => {
    // Route logic for authenticated user
    res.render('dashboard', { user: req.user });
});

app.get('/secret', (req,res) => {
    //res.sendFile(path.join(__dirname, '/static/secret-page.html'));
    res.render('secret-page');
});

app.get('/logout', function(req, res, next){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

app.post('/login', passport.authenticate('local', {failureRedirect:'/'}),(req,res)=>{ 
    console.log(req.user);
    res.redirect('/dashboard');
});


app.listen(PORT, (err) => {
    console.log('server running on port:',PORT);
});