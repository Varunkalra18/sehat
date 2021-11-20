import express from 'express'
import cors from "cors"
import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
import  auth from './middleware.js'

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
    const users_data = [{
        name: "Varunn",
        email: "kalravarun1999@gmail.com",
        password : "var",
        type: "client",
        isFirst:"yes"
    },
    {
        name: "Kalra",
        email: "kalra@gmail.com",
        password : "var",
        type: "Admin"
    }
]
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
app.listen(9002, ()=>{
    console.log("Backend Working at 4000")
})