const EXPRESS = require("express");
const APP = EXPRESS();

const PORT = 3000;
const PATH = require('path');

// Serve static files (like CSS)
APP.use(EXPRESS.static(__dirname + '/public'));

APP.get('/', (req, res) => {
    //res.send("Hello");
    res.sendFile(PATH.join(__dirname + '/views/index.html'));
});

APP.get('/about', (req, res) => {
    //res.send("This is about page");
    res.sendFile(PATH.join(__dirname + '/views/about-us.html'));
});

APP.get('/contact', (req, res) => {
    //res.send("This is contact page");
    res.sendFile(PATH.join(__dirname + '/views/contact-us.html'));
});

APP.get('/books/:bookName/', (req, res) => {
    res.send(`You are looking for : ${req.params.bookName}`);
});

APP.listen(PORT, () => {
    console.log("Server Started");
});