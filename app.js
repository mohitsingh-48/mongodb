const express=require('express')
const app=express();
const userModel=require('./usermodel');
app.get('/',(req,res)=>{
    res.send("hey")
})
app.get('/create',async (req,res)=>{
    let createusr= await userModel.create({
        name:"Mohit",
        username:"cruzerbalde",
        email:"mr8776644@gmail.com"
    })
    res.send("createusr")
})
app.listen(3000)