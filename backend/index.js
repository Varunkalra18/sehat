import express from 'express'
import cors from "cors"
import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
//import { getName} from './middleware'
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/sehatdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("Successfully Connected!!!")
})
//creating schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
//Creating User Model
const User = new mongoose.model("User", userSchema)


//Routes
app.post("/login", (req,res)=>{
    const users_data = [{
        name: "Varunn",
        email: "kalravarun1999@gmail.com",
        password : "var",
        type: "client"
    },
    {
        name: "Kalra",
        email: "kalra@gmail.com",
        password : "var",
        type: "Admin"
    }
]
    const {email, password} = req.body
    var users = users_data.filter((user) => {
        if(user.email === email)
        {
            return user ;
        }
    })
    console.log(users)
    if(password == users[0].password)
    {
        const token = jwt.sign(users[0].email,"secret1999g13");
        console.log(token) ;
        users = {...users,token} ;
        console.log(users) ;
        res.send(users)
    }
    else{
        res.send({message:"Password didn't match", code:404})
    }
    // User.findOne({email:email}, (err,user)=>{

    //     if(!err)
    //     {
    //         console.log(user) ;
    //         if(password === user.password)
    //         {
    //             const token = jwt.sign(user.email,"secret1999g13");
    //             console.log(token) ;
    //             user = {...user,token} ;
    //             console.log(user) ;
    //             res.send(user)
    //         }
    //         else{
    //             res.send({message:"Password didn't match", code:404})
    //         }
    //     }
    //     else{
    //         console.log(err)
    //         res.send({message:"user doesnot exist", code:500})
    //     }
    // })
})
app.post("/register", (req,res)=>{
    const {name, email, password} = req.body
    User.findOne({email: email}, (err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        } else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
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

app.listen(9002, ()=>{
    console.log("Backend Working at 4000")
})