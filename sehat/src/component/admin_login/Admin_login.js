import React from "react";

import axios from 'axios'
import {useHistory} from 'react-router-dom'
import admin from '../images/admin.svg'
import { useState } from "react";
import './Admin_login.css'
 function Admin_login() {
    const history = useHistory()
    const [user, setUser] = useState({
        email:"",
        password:""
    }) 
    console.log(user)
    const handleChange = (e) => {
        // console.log(e.target)
        const {name,value} = e.target ;
        // console.log(name,value)
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        const {email, password} = user
        if(email && password)
        {
            axios.post("http://localhost:9002/login",user)
            .then(res => alert(res.data.message))
        }
        else{
            alert("Enter Credentials Correctly")
        }
    }
    return (
       <div className="all1">
            <div className="images1">
                <img src={admin} alt='login'/>
                </div>
       <div className="onlypadding1">
       
        <div className="Login">
            <h1>Login</h1>
            <div>
                <input type="text" name="email" value={user.email} placeholder="Admin Email Address"onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder=" Admin Password" onChange={handleChange}></input>
            </div>
            <div className="Button" onClick={login}>Login</div>
        </div></div></div>
        
       
    )
}
export default Admin_login;