import React from "react";
import { useHistory } from "react-router";
import './Donationform.css'

function Donationform()
{

    return(
        <div className="image">
            <center>
            <div className="container2">
        <div className="container">
        <form action="/action_page.php">
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Full Name</label>
            </div>
            <div className="col-25">
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="Email">Email</label>
            </div>
            <div className="col-75">
              <input type="email" id="Email" name="Email" placeholder="Your email.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="State">State</label>
            </div>
            <div className="col-75">
              <input type="text" id="state" name="state" placeholder="Ex Bhopal.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="City">City</label>
            </div>
            <div className="col-75">
              <select id="City" name="City">
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Benglore</option>
                <option>Bhopal</option>
                <option>Indore</option>
                <option>Chennai</option>
                <option>Jabalpur</option>
                <option>Delhi</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="Blood group">Blood group</label>
            </div>
            <div className="col-75">
              <select id="Blood group" name="Blood group">
                <option>A+</option>
                <option>B+</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>B-</option>
                <option>A-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>
          <div><br/>
          <button type="button" value="submit" class="btn btn-outline-success">Success</button>
          </div>
        </form>
      </div></div></center></div>
    );
  }
export default Donationform;