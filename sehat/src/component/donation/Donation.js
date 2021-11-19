import React from "react";
import { useHistory } from "react-router";

import b2 from '../images/b2.png'


import './Donation.css'
function Donation()
{
    let history=useHistory()
    function handleClick(){
        history.push('/donationform')
    }
    return(
        <div id="donation">
          <div className="w3ls-welcome py-5">
            <div className="container py-xl-5 py-lg-3">
              <div className="row">
                <div className="col-lg-5 welcome-right">
                  <img src= {b2} className="img-fluid"  alt="i2"/>
                </div>
                <div className="col-lg-7 welcome-left mt-4">
                  <h3> “Blood Donation Costs You Nothing, But It Can Mean The World To Someone In Need.”</h3>
                  <h4 className="my-4 font-italic">“Donating Money Is Great, But Donating Blood Is Even Better.”</h4>
                  <p>Click here and contribute in blood donation.</p>
                  
                    <div className="button" onClick={handleClick} >Donate</div>
                
                </div>
              </div>
            </div>
          </div></div>
    )
}
export default Donation;