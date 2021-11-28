    import React,{useState} from 'react'
    import './login.css'
    import axios from 'axios'
    import {useHistory} from 'react-router-dom'
    import userlogin from '../images/userlogin.svg'
    function Login() {
       
        const history = useHistory()
        const [user, setUser] = useState({
            email:"",
            password:""
        }) 
        console.log(user)
        const handleChange = (e) => {
            //console.log(e.target)
            const {name,value} = e.target ;
            // console.log(name,value)
            setUser({
                ...user,
                [name]: value
            })
            
        }
        const login = () => {
            console.log("we are in login")
            const {email, password} = user
            if(email && password)
            {
                axios.post("http://localhost:9002/login",user)
                .then((res) => {
                    if(res.data.code === 404)
                    {

                        alert("Invalid Password") ;
                    }
                    else if(res.data.code === 500)
                    {
                        alert("User Not Found") ;
                    }
                    else{
                        localStorage.setItem("user", JSON.stringify(res.data))
                        const vas = JSON.stringify(res.data)
                        
                        console.log(vas.email)
                        history.push("/")
                    }
                })
            }
            else{
                alert("Enter Credentials Correctly")
            }
           
        }
        const history2=useHistory();
        function handleClick1()
        {
            history2.push('/forgot');
        }
        return (
            <div className="padding1">
              <img src={userlogin} alt="login"/>
                    
            
                <div className="Login">
                
                    <h1>Login</h1>
                    <div>
                        
                        <input type="text" name="email" value={user.email} placeholder="Enter Your Email Address" onChange={handleChange}></input>
                        <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
                        
                    </div>
                    <div className="Button" onClick={login}>Login</div>
                    <span onClick={handleClick1} className="Click">Forget Password</span>
                    <h6>Or</h6>
                    <div className="Button" onClick={() => history.push("/register")}>Register</div>
                </div>
                
            </div>
    
        )
    }

    export default Login
