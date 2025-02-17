/*3) Uptime Display: Create a Node.Js script that uses the os module to determine the uptime of the system and display it in a human-readble format, 
showing days, hours, minutes, and seconds. 
*/

const os = require('os');
let osTime = os.uptime();
const hours = Math.floor(osTime / 3600);
const minutes = Math.floor((osTime % 3600) / 60);
const days = Math.floor((osTime) / 86400);
const seconds = ((osTime % 60000) / 1000).toFixed(0);

console.log("hours:", hours);

console.log("Minutes:", minutes);

console.log("Days:", days);

console.log("Seconds:", seconds);
