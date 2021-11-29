import React,{useState} from 'react'
import './register.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
import doctor from '../images/doctor.svg';
import '../..//../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Register() {
    
   
    const history = useHistory()
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:"",
        contactNo:"",
        utype:"client",
        gender:"",
        pincode:""
    }) 
    //console.log(user)
    const handleChange = (e) => {
        // console.log(e.target)
        const {name,value} = e.target ;
        
        // console.log(name,value)
        setUser({
            ...user,
            [name]: value
        })
    }
    console.log(user)
    const register = () =>{
        console.log(user)
        const {name,email,password,reEnterPassword,contactNo,gender,pincode} = user
        if(name && email && password && (password === reEnterPassword) && contactNo && gender && pincode)
        {
            axios.post("http://localhost:9002/register", user)
            .then(res => history.push("/login"))
            // alert("posted successfully")
        }
        else{
            alert("valid input")
        }
        
    }
    return (
      <div className="padding2">
            <img src={doctor} alt="doctor" />
                
        <div className="register">
           
           <h1>Register</h1>
          <input type="name" name="name" value={user.name} placeholder="Enter Your Name" onChange={handleChange}></input>
         
           <input type="email" name="email" value={user.email} placeholder="Enter Your Email"onChange={handleChange}></input>
           <input type="contact" name="contactNo" value={user.contactNo} placeholder="Enter your contact number"onChange={handleChange}></input>
           <input type="password" name="password" value={user.password} placeholder="Enter Your Password"onChange={handleChange}></input>
           <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re Enter your password"onChange={handleChange}></input>
          
                <div className="row">
                    <div className=" col-6 pt-2">
                    <select value={user.gender} onChange={handleChange} name="gender" >
                       <option value="Male" selected>Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </div>
                    <div className="col-6">
                        <input type="text" name="pincode" value={user.pincode} placeholder="Pincode"onChange={handleChange}></input>
                    </div>
                </div>
            
          
          
            <div className="Button" onClick={register}>Register</div>
            <div>or</div>
            <div className="Button" onClick={()=> history.push("/login")}>Login</div>
            
        </div></div>
    )
}

export default Register