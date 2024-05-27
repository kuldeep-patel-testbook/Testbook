const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const port = 4003;
console.log("Submit Data");

const server = http.createServer((req, res) => {

    const parseedUrl = url.parse(req.url, true);

    if(parseedUrl.pathname === "/") {
        fs.readFile(path.join(__dirname, "formData.html"), (err, data) => {

            if(err) {
                res.writeHead(500, {'content-type': 'text/plain'});
                res.end("internal server error");
            } else {
                res.writeHead(200, {'content-type': 'text/html'});
                res.end(data);
            }

        });

    } else if(parseedUrl.pathname === '/submit' && req.method === 'POST') {
        let bodyContent = "";
        req.on('data', postData => {
            console.log(postData);
            bodyContent+=postData.toString();
            console.log(bodyContent);
        });
        req.on('end', ()=> {
            const params = new URLSearchParams(bodyContent);
            const name = params.get('name');
            if(name) {
                res.writeHead(200, {'content-type':'text/html'});
                res.end(`<h1>Hello ${name}</h1>`);
            } else {
                res.writeHead(500, {'content-type':'text/html'});
                res.end(`Wrong Data`);
            }
        });
    } else {
        res.writeHead(500, {'content-type': 'text/html'});
        res.end(`something wen't wrong`);
    }

});


server.listen(port, () => {
    console.log(`Listening at port number ${port}`);
});