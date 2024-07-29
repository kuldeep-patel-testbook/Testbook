const path = require('path');
//console.log("Path", path);

const a = path.basename("c/data/abc/myfile.js");
console.log(a);
const b = path.extname("c/data/abc/myfile.js");
console.log(b);
const c = path.dirname("c/data/abc/myfile.js");
console.log(c);

console.log(__dirname);
console.log(__filename);


const http = require('http');
const port = 3001;
const fs = require('fs');
const os = require('os');

//console.log(fs);
console.log("Start reading");

//async function
// fs.readFile('myfile.txt', (err, data) => {
    
//     console.log(data.toString());
// });


//sync function
const syncFileRead = fs.readFileSync('myfile.txt');
console.log(syncFileRead.toString());

console.log("finished reading");

// read multiple files using iterate loop

const files = ['myfile.txt','myfile2.txt', 'myfile3.txt'];

// Using ForEach
files.forEach( (filedata, index) => {
    const data = fs.readFileSync(filedata,'utf-8');
    console.log(os.EOL);
    console.log(`Content of file ${filedata}`);
    console.log(data);
    console.log("----------------------------------");
});

/* // using for of loop
for(let filedata of files) {
    const data = fs.readFileSync(filedata,'utf-8');
    console.log(os.EOL);
    console.log(`Content of file ${files}`);
    console.log(data);
    console.log("----------------------------------");
}*/

/*
// using for in loop
for(let filedata in files) {
    const data = fs.readFileSync(files[filedata],'utf-8');
    console.log(os.EOL);
    console.log(`Content of file ${files}`);
    console.log(data);
    console.log("----------------------------------");
}*/

// for(let i=1; i<=10; i++) {
//     fs.writeFileSync(`myfile-${i}.csv`,'EmpName, EmpId');
     
// }

// const url = require('url');
// //const urlString = "https://www.example.com/datafile/file.txt";
// const urlString = "https://docs.google.com/spreadsheets/u/3/?pli=1&authuser=0";
// const data = url.parse(urlString, true).query;
// console.log(data);


const Server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.write("This is Home Page 1");
        res.end("This is Home Page 2");
    }
    else if(req.url === '/about') {
        res.end("This is About Page");
    }
    else if(req.url === '/contact') {
        res.end("This is Contact Page");
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }

    //res.end("This is new page");
});

Server.listen(port, () => {
    console.log(`Server listen port ${port}`);
});


