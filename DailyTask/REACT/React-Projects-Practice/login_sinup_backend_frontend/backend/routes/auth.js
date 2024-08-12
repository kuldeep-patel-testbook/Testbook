const express=require('express');
const app=express();
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const userDetails=require('../models/user');
const router=express.Router();
// const {body, validationResul}=require('express-validator');
const dotenv=require('dotenv');
dotenv.config();
const JWT_SECRET=process.env.JWT_SECRET;
console.log('JWT_SECRET',JWT_SECRET);

router.post('/register',async (req,res)=>{
   

    try{
        console.log('in routes folder');

        // console.log(req.body);
        const existingEmail=await userDetails.findOne({email:req.body.email});
        if(existingEmail){
            return res.status(400).json({error:'Email id already exist, please login'})
        }
        const salt=await bcryptjs.genSalt(10);
        const hashPassword=await bcryptjs.hash(req.body.password,salt);
        const newUser=await userDetails.create({
            email:req.body.email,
            password:hashPassword,
            username:req.body.username,
        })
        console.log(newUser);
        const payload={
            user:{
                id:newUser.id
            }
        }
        const authtoken=jwt.sign(payload,JWT_SECRET);
     
        res.json({authtoken})    
    }
    catch(e){
        console.log(e);
    }
})

router.post('/login',async(req,res)=>{
    try{
        console.log('req',req.body.email);
        const theUser=await userDetails.findOne({email:req.body.email});
        console.log(theUser);
        if(theUser && theUser.role===req.body.role){
            let payload={
                user:{
                    id:theUser.id
                }
            };
            const expiresIn=3600;
            const authtoken=jwt.sign(payload,JWT_SECRET,{expiresIn});

            return res.status(200).json({authtoken,name:theUser.name,role:theUser.role })
        }
        else{
            const error='Email id does not exist or role is incorrect';
            return res.status(400).json({error:error})
        }
    }
    catch(e){
        console.log(e);
    }
}

)


module.exports=router