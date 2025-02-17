/*2) CPU Information: Develop a program that utilizes the os module to retrieve information about the CPU, including the model, speed and number of cpu cores.*/

console.log("CPU Information");
const os = require('os');
console.log("CPU Information", os.cpus());
//console.log("Model", os.cpus()[0]);
//console.log(os.EOL);
//console.log(os.EOL);
//console.log("cpus length", os.cpus().length);
//console.log(os.constants);