const express = require('express');
const app = express();
const PORT = 5500;

app.use(express.json()); // JSON request body parse karega

let builtInArr = [
    'express.json() => JSON request body parse karne ke liye',
    'express.urlencoded() => URL-encoded form data handle karne ke liye',
    'express.static() => Static files serve karne ke liye',
    'express.text() => Plain text request body parse karne ke liye',
    'express.raw() => Raw binary data handle karne ke liye'
];
console.log("================ Express JS Build In Middlware ================");
builtInArr.forEach(element => {
    console.log(element);
});

app.listen(PORT, () => {
    console.log(`Server Connectiong at PORT: http://localhost:${PORT}`);
});