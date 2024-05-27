const express = require("express");
const cookieparser = require("cookie-parser");
const helmet = require("helmet");
const path = require("path");
const PORT = 3001;

const app = express();
app.use(helmet());
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    //res.send("Home Page");
    //res.end();
    let username = req.cookies.username;
    return res.render("home", { username });
});

app.get('/login', (req, res) => {
    let status = req.query.msg ? true : false;
    console.log(status);

    if(status === false) {
        return res.render("login", {error: "Invalid Details"})
    } else {
         return res.render("login");
    }
});

app.get('/welcome', (req, res) => {
    let username = req.cookies.username;
    return res.render("welcome", {username});
});

app.post('/process_login', (req, res) => {
    let {username, password} = req.body;

    let validUserDetail = {
        username: "Kuldeep",
        password: "ptl3063"
    }

    if(username === validUserDetail.username && password === validUserDetail.password) {
        res.cookie('username', username);
        return res.redirect('/welcome');

    } else {
        return res.redirect("/login?msg=fail");
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('username');
    return res.redirect('/login');
});

app.listen(PORT, () => {
    console.log("server running on port : ", PORT);
});


