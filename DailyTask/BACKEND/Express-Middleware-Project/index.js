const EXPRESS = require("express");
const APP = EXPRESS();
const PATH = require('path');
const FS = require('fs');

APP.use(EXPRESS.urlencoded({
    extended : true
}));

APP.get('/', (req, res) => {
    res.send("Hello World");
    // FS.open('userData.txt', 'w', function(err, file) {
    // if(err) throw err;
    // console.log('Saved');
    // });

    // // Read data from a file.
    // FS.readFile("userData.txt", (err, data) => {
    //     if(err) throw err;
    //      console.log(data.toString());
    //      res.send(data.toString());
    // });

    // FS.appendFile('userData.txt', 'Userdata1 username: aaaa and email : aaa@test.com', (err) => {
    //     if(err) throw err;
    //     console.log("data added last line new");
        
    // });

    // FS.unlink('newUserData.txt', (err) => {
    //     if(err) throw err;
    //     console.log("File Removed Successfully");
    // });


    // FS.rename('userData.txt', 'newUserData.txt', (err) => {
    //     if(err) throw err;
    //     console.log("file renamed");
    // });

    // FS.writeFile('userData.txt', 'This userdata detail: username : Kuldeep, userEmail : kp@test.com', (err) => {
    //     if(err) throw err;
    //     console.log("File Written Successfully!");
    // })
});

APP.get('/about', (req, res) => {
    res.send("This is a about us page");
});

APP.get('/contact', (req, res) => {
});

APP.get('/login', (req, res) => {
    res.sendFile(PATH.join(__dirname + '/views/login.html'))
});

APP.post('/handleLogin', (req, res) => {
    console.log(req.body.userName);
    console.log(req.body.userPassword);
    res.send("Hello " +req.body.userName);
});

APP.listen(3305, () => {
console.log("App listeniing on port 3305 and Server is Started");
});