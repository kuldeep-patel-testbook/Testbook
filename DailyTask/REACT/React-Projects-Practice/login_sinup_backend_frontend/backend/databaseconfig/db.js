const mongoose=require('mongoose');
const mongoPath='mongodb://127.0.0.1:27017/demosignup'
const bookingConnection=async()=>{
    try{
        await mongoose.connect(mongoPath,{dbName:'demosignup'});
        console.log('database has been connected');
    }
    catch(e){
        console.log(e);
    }
}
// module.exports=bookingConnection;
bookingConnection();