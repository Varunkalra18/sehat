import axios from "axios";
import React from "react";

import { useState } from "react";
import { useHistory } from "react-router";
import './Donationform.css'

function Donationform()
{
  const history = useHistory()
    const [donates, setDonate] = useState({
      name:"",
      email:"",
      state:"",
      city:"",
      bloodgroup:""
    })
    console.log(donates)
    const handleChange = (e) => {
      const {name,value} = e.target ;
      //console.log(name,value)
      setDonate({
          ...donates,
          [name]: value
      })
    }
    const submit = ()=> {
      console.log(donates)
      axios.post("http://localhost:9002/donation", donates)
      .then((res)=> {
        alert(res.data.message)
        history.push("/")
      })
    }
    
    console.log(donates)
    return(
        <div className="image">
            <center>
            <div className="container2">
        <div className="container">
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Full Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <div className="col-25">
              <input type="text" id="fname" name="name" value={donates.name} onChange={handleChange} placeholder="Your name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="Email">Email</label>
            </div>
            <div className="col-75">
              <input type="email" id="Email" name="email" onChange={handleChange} value={donates.email} placeholder="Your email.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="state">State</label>
            </div>
            <div className="col-75">
              <input type="text" id="state" name="state" onChange={handleChange} value={donates.state}placeholder="Ex Bhopal.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="City">City</label>
            </div>
            <div className="col-75">
              <select id="City" name="city" value={donates.city} onChange={handleChange}>
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
              <select id="Blood group" name="bloodgroup" value={donates.bloodgroup} onChange={handleChange}>
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
          <button type="button" value="submit" class="btn btn-outline-success" onClick={submit}>Submit</button>
          </div></div>
        </form>
      </div></div></center></div>
    );
  }
export default Donationform;