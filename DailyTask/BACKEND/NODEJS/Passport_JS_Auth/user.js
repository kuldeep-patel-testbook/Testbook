const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect('mongodb://localhost/users')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log(`Error connecting to MongoDB`, error);
})

const Schema = mongoose.Schema;

const User = new Schema({
    username : String,
    password : String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("userData", User, 'userData');