const express = require("express");
const app = express();
const port = 3000;

const cookieParser = require('cookie-parser');

app.get('/', (req, res) => {
    res.send("Welcome to backend");
});

app.get("/setCookieRoute", (req, res) => {
    
    res.cookie('myCookie', 'LearnNodeCookie');
    res.send("Hello, world, cookie has been created!");
});

app.get("/readCookieRoute", (req, res) => {
    //const cookies = cookieParser(req);
    //const myCookieValue = cookies.myCookie || 'Cookie not found';

    const myCookie = req.cookies.myCookie || 'Cookie not found';
    console.log(myCookie);

    res.send("cookie read succesfully!");
});

app.get("/deleteCookieRoute", (req, res) => {
    res.clearCookie();
    res.send("Cookie has been deleted successfully");
});


app.listen(port, () => {
    console.log(`Server is listening port ${port}`);
});