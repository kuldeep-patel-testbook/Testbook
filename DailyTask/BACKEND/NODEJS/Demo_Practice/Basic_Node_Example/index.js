const os = require('os');
console.log("os information", os.cpus());

console.log(os.EOL);
// console.log(os.EOL);

console.log("System information ----------------");
console.log("Version:", os.version());
console.log("Free Memory:", os.freemem());
console.log("Hostname:", os.hostname());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log(os.EOL);

console.log("Up time display information ----------------");

let osTime = os.uptime;
const hours = Math.floor(osTime / 3600);
const minutes = Math.floor((osTime % 3600) / 60);
const days = Math.floor((osTime) / 86400);
const seconds = Math.round((osTime % 60000) / 1000);

console.log("hours:", hours);
console.log("minutes:", minutes);
console.log("Days:", days);
console.log("Seconds:", seconds);

