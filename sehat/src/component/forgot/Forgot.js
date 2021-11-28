import React from "react";
 import doctor from '../images/doctor.svg';
 import './Frogot.css'
function Forgot()
{
    return(
        <div className="top">
            <img src={doctor} alt="doctor" />
                
        <div className="register">
           
           <h1>Forgot Password</h1>         
           <input type="email" name="email" placeholder="Enter Your Email"></input>
          
           <input type="password" name="password"  placeholder="Enter Your Verification code"></input>
           
            <div className="Button" >Send</div>
            
        </div></div>
    )
}
export default Forgot;