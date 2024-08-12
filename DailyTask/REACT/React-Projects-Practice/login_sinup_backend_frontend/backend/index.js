const express=require('express');
const app=express();
const port=3100;
const cors=require('cors');
require('./databaseconfig/db')
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    console.log('hello world');
    res.send('<h1>Hello World</h1>')
})
console.log('in backend');
app.use('/api/auth',require('./routes/auth'));

app.listen(port,()=>{
    console.log(`server is listening at ${port}`);
})