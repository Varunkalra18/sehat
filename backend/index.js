import express from 'express'
import cors from "cors"
import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
import  auth from './middleware.js'
// const nodemailer = require("nodemailer")
import nodemailer from "nodemailer"
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"healthcaresehat@gmail.com",
        pass:"Sehathealth@123"
    }
})

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb+srv://Tejaspandit:Tejaspandit123@cluster.bilac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("Successfully Connected!!!")
})
//creating schema

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    conatact:String,
    gender:String,
    password:String,
    utype:String,
    gender:String,
    pincode:String
})
const appointSchema = new mongoose.Schema({
    regEmail:String,
    name:String,
    email:String,
    doctor:String,
    date:String,
    time:String
})
const bloodd = new mongoose.Schema({
    name:String,
    email:String,
    state:String,
    city:String,
    bloodgroup:String
})
//Creating User Model
const User = new mongoose.model("User", userSchema)
const appoint = new mongoose.model("appoint", appointSchema)
const dona = new mongoose.model("dona", bloodd)

//Routes
app.post("/login", (req,res)=>{
   
    const {email, password} = req.body
    
    
    User.findOne({email:email}, (err,user)=>{

        if(!err)
        {
            console.log(user) ;
            if(password === user.password)
            {
                const token = jwt.sign(user.email,"secret1999g13");
                console.log(token) ;
                user = {...user,token} ;
                console.log(user) ;
                res.send(user)
            }
            else{
                res.send({message:"Password didn't match", code:404})
            }
        }
        else{
            console.log(err)
            res.send({message:"user doesnot exist", code:500})
        }
    })
    // var users = users_data.filter((user) => {
    //     if(user.email === email)
    //     {
    //         return user ;
    //     }
    // })
    // console.log(users)
    // if(password == users.password)
    // {
    //     const token = jwt.sign(users[0],"secret1999g13");
    //     console.log(token) ;
    //     users = {...users,token} ;
    //     console.log(users) ;
    //     res.send(users)
    // }
    // else{
    //     res.send({message:"Password didn't match", code:404})
    // }
})
app.post("/register", (req,res)=>{
    const {name, email, password, contactno,utype, gender, pincode} = req.body
    console.log(utype)
    User.findOne({email: email}, (err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        } else{
            const users = new User({
                name,
                email,
                password,
                contactno,
                utype,
                gender,
                pincode
            })
            users.save(err => {
                if(err)
                {
                    res.send(err)
                }
                else{
                    res.send({message:"Successfully Registerd"})
                }
            })
        }
    })    
})
//appointment



app.post("/appointment", auth, (req,res) => {
    
    let appoints = {}
    appoints = req.body.appoint
    console.log("req body:", appoints)
    const { name, email, doctor, date,time} = appoints
    const regEmail = req.user
    console.log(regEmail,name,email,doctor,date,time)
    const data = new appoint({
        regEmail,
        name,
        email,
        doctor,
        date,
        time
    })
    data.save(err => {
        if(err)
        {
            res.send(err)
        }
        else{
            res.send({message:"Successfully appointment taken"})
        }
    })
    

})
app.post("/donation", (req,res)=>{
    console.log(req.body)
    const {name, email, state, city, bloodgroup} = req.body ;
    const data = new dona({
        name,
        email,
        state,
        city,
        bloodgroup
    })
    data.save(err => {
        if(err)
        {
            res.send(err)
        }
        else{
            res.send({message:"You are in our Database we will contact you when required"})
        }
    })
})
app.post("/adminLogin", (req,res) => {
    const users_data = {
        name: "Kalra",
        email: "kalra@gmail.com",
        password : "var",
        type: "Admin"
    }
    const {email, password} = req.body
    if(email === users_data.email && password === users_data.password){
        const token = jwt.sign(users_data, "secretg13")
        console.log(token)
        var usered = {...users_data,token}
        console.log(usered)
        res.send(usered)
    }
    else{
        console.log("Invalid Cred")
        res.send({code:404, message:"Invalid Credentials"})
    }
})
app.get("/viewappointment", (req,res)=>{
    console.log("here in view appointment")
    appoint.find({}, (err,data) => {
        console.log(err)
        if(err){
            res.send({code:404, message:"No Appintments"})
        }
        else{
            console.log(data)
            res.send(data)
        }
    })
})
app.get("/sendAnnouncement", (req,res) =>{
    console.log("WE are in send Announcement")
    var mailOption = {
        from:"healthcaresehat@gail.com",
        to:"kalravarun1999@gmail.com",
        subject:"Mail for blood requirement",
        text:"Thanks for your interest in donating blood, Your Blood can save a persons life, Thanks and regards."
    }
    transporter.sendMail(mailOption,(err,info)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Email sent"+ info.response)
        }
    })
    res.send({message:"successfull"})
})
app.listen(9002, ()=>{
    console.log("Backend Working at 9002")
})