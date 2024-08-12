const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const userRecord=mongoose.model('userRecord',userSchema);


module.exports=userRecord;