import React from "react";
 import doctor from '../images/doctor.svg';
 import './Reset.css'
function Reset()
{
    return(
        <div className="top2">
            <img src={doctor} alt="doctor" />
                
        <div className="register">
           
           <h1>Reset Password</h1>                   
           <input type="password" name="password"  placeholder="Enter new password"></input>
           <input type="password" name="password"  placeholder="Confirm password"></input>
           
            <div className="Button" >Send</div>
            
        </div></div>
    )
}
export default Reset;