console.log("System Information");
/*System Information: Write a Node.js program that usess the os module to display basic system information 
such as the operating system, platform, architecture and total memory available, free memory and so on.*/

const os = require('os');
console.log("operating system", os.version());
console.log("platform", os.platform());
console.log("architecture", os.arch());
console.log("total memory", os.totalmem());

let size = (bytes) => {
    
    if (bytes === 0) {
        return "0.00 B";
    }

    let a = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, a)).toFixed(2) + ' ' + ' KMGTP'.charAt(a) + 'B';
}

console.log("convert total memory", os.totalmem(), "to GB", size(os.totalmem()));
console.log("free memory", os.freemem());
console.log("convert free memory", os.freemem(), "to GB", size(os.freemem()));