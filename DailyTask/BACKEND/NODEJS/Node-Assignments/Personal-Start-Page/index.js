const HTTP = require('http');
const PORT = 4001;
const fs = require('fs');

function getFile(path, contextType, res) {
    fs.readFile(path, (err, content) => {
        if(err) {
            res.writeHead(404, { 'Content-Type': 'text/html'});
            res.end("File not found");
        } else {
            res.writeHead(200, { 'Content-Type': contextType});
            res.end(content);
        }
    });
}
const SERVER = HTTP.createServer( (req, res) => {
    console.log("requested route is : ", req.url);
    console.log(res);
    
    if (req.url == '/') {
        getFile('./index.html', 'text/html', res);

     } else if (req.url == '/styles.css') {
        getFile('./styles.css', 'text/css', res);

     } else if (req.url == '/todo.js') {
        getFile('./todo.js', 'applicaiton/js', res);

     } else if (req.url == '/clock.js') {
        getFile('./clock.js', 'applicaiton/js', res);

     } else if (req.url == '/weather.js') {
        getFile('./weather.js', 'applicaiton/js', res);

     } else if (req.url == '/favourite.js') {
        getFile('./favourite.js', 'applicaiton/js', res);

     } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end(`The requested route ${req.url} is not handled yet`)

     }
});

SERVER.listen(PORT, () => {
    console.log(`App listeniing on port ${PORT} and Server is Started`);
});