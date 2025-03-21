const express = require('express');
const fs = require('fs');
const zlib = require('zlib');
const status = require('express-status-monitor');
const app = express();
const PORT = 8000;

app.use(status());

/*app.get('/', (req, res) => {
    fs.readFile("./Sample2.txt", (err, data) => {
        res.end(data)
    })
});*/

fs.createReadStream("./Sample2.txt").pipe(
    zlib.createGzip().pipe(fs.createWriteStream('./Sample2.zip'))
);

// Using Streams
app.get('/', (req, res) => {
    const stream = fs.createReadStream("./Sample2.txt", 'utf-8');
    stream.on("data", (chunk) =>  res.write(chunk));
    stream.on("end", () => res.end());
});


app.listen(PORT, ()=> {
    try {
        console.log(`Server Connecting Success at PORT: http://localhost:${PORT}/`);
    } catch (error) {
        console.log(`Server Connecting error: ${error}`)
    }
});
