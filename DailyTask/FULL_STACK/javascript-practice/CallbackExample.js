
function userData(userId, callback) { // The userData function simulates an asynchronous operation using setTimeout(). 
    setTimeout(() => {
            const user = {id: userId, name: "Kuldeep Patel"};
            callback(user); // The callback function is executed once the data is "fetched."
    }, 2000);
};

userData(1, function(user) {
    console.log("User Data Show within 2 seconds", user);
});