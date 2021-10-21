import React,{useState} from 'react'
import './login.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Login() {
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
        <div className="Login">
            <h1>Login</h1>
            <div>
                <input type="text" name="email" value={user.email} placeholder="Enter Your Email Address"onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
            </div>
            <div className="Button" onClick={login}>Login</div>
            <h6>Or</h6>
            <div className="Button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login
