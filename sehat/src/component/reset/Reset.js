import React from "react";
 import reset from '../images/reset.svg';
 import './Reset.css'
function Reset()
{
    return(
        <div className="top2">
            <img src={reset} alt="doctor" />
                
        <div className="register">
           
           <h1>Reset Password</h1>                   
           <input type="password" name="password"  placeholder="Enter new password"></input>
           <input type="password" name="password"  placeholder="Confirm password"></input>
           
            <div className="Button" >Send</div>
            
        </div></div>
    )
}
export default Reset;