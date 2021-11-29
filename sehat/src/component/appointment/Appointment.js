import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../css/bootstrap.css'
import '../css/fontawesome-all.css'
import '../css/style.css'

import { useHistory} from 'react-router';


let Appointment=()=>
{
  let history=useHistory()
  const home = ()=> {
    history.push("/")
  }
  function handleClick(){
    history.push("/")
  }
  const [appoint, setUser] = useState({
    name:"",
    email:"",
    doctor:"",
    date:"",
    time:"",

})
console.log(appoint)
const handleChange = (e) => {
  //console.log(e.target)
  const {name,value} = e.target ;
  // console.log(name,value)
  setUser({
      ...appoint,
      [name]: value
  })
  
}
const submit = () =>{
  console.log(appoint)
  const {name,email,doctor,date,time} = appoint
  if(name && email && doctor && date && time)
  {
      const userStr  = localStorage.getItem("user")
      if (!userStr){
        alert("Please Login first")
      }
      else{
        const user = JSON.parse(userStr) ;
        console.log(user)
        let tokens = user.token ;
        let toc = `Bearer ${tokens}`
        console.log(toc)
        axios.post("http://localhost:9002/appointment", {appoint},{
          
          headers : {"Authorization" :`Bearer ${tokens}`},
          
        }) 
        .then((res) => {
          console.log(res.data.message)
          alert(res.data.message)
          history.push("/")
        })

      }
            // alert("posted successfully")
  }
  else{
      alert("Invalid input")
  }
  
}
    return(
     <div>
        <title>Sehat-appointment</title>
        {/* Meta tag Keywords */}
       
        {/* //Web-Fonts */}
        {/* header */}
        {/* //top-bar */}
        {/* header 2 */}
        <div id="home">
          {/* navigation */}
          <div className="main-top py-1">
            <nav className="navbar navbar-expand-lg navbar-light fixed-navi">
             
                {/* logo */}
                <h1>
                  <a className="navbar-brand font-weight-bold font-italic" href="index.html">
                    <span>S</span>ehat
                    <i className="fas fa-syringe" />
                  </a>
                </h1>
                {/* //logo */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
              
            </nav>
          </div>
          {/* //navigation */}
          {/* modal */}
          {/* login */}
          {/* //login */}
          {/* register */}
          {/* //register */}
          {/* //modal */}
        </div>
        {/* //header 2 */}
        {/* banner 2 */}
        <div className="inner-banner-w3ls">
         
          {/* //banner 2 */}
        </div>
        {/* page details */}
        <div className="breadcrumb-agile">
          <div aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                  <p onClick={home}>Home</p>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Appointment</li>
            </ol>
          </div>
        </div>
        {/* //page details */}
        {/* contact */}
        <div className="appointment py-5">
          <div className="py-xl-5 py-lg-3">
            <div className="w3ls-titles text-center mb-5">
              <h3 className="title">Appointment</h3>
              <span>
                <i className="fas fa-user-md" />
              </span>
              <p className="mt-2">Enter your details to get appointment.</p>
            </div>
            <div className="d-flex">
              <div className="appoint-img">
              </div>
              <div className="contact-right-w3l appoint-form">
                <h5 className="title-w3 text-center mb-5">Fill your appointment form</h5>
                
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Your Name</label>
                    <input type="text" className="form-control" placeholder="Your Name " name="name" value={appoint.name} onChange={handleChange} id="recipient-name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-phone" className="col-form-label">Your Email</label>
                    <input type="email" className="form-control" placeholder="Your Email" name="email" value={appoint.email} onChange={handleChange} id="recipient-phone" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="datepicker" className="col-form-label">Select your doctor</label>
                    <select required className="form-control" name="doctor" value={appoint.doctor} onChange={handleChange}>
                      <option value>Select your doctor</option>
                      <option value={1}>Anne Dan</option>
                      <option value={2}>Carol Una</option>
                      <option value={3}>Diana Sue</option>
                      <option value={4}>Irene Sally</option>
                      <option value={4}>Jane Mary</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="datepicker" className="col-form-label">Select appointment date</label>
                    <input placeholder="Date" className="date form-control" id="datepicker" type="text" name="date" value={appoint.date} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="datepicker" className="col-form-label">Select appointment time</label>
                    <select required className="form-control" name="time" value={appoint.time} onChange={handleChange}>
                      <option value>Select Time</option>
                      <option value={1}>08:00-8:30</option>
                      <option value={2}>08:30-9:00</option>
                      <option value={3}> 09:00-9:30</option>
                      <option value={4}>09:30-10:00</option>
                    </select>
                  </div>
                  
                  <button className ="btn btn-primary" type="submit"  onClick= {submit} clacdssName="btn_apt" >Submit</button>
                
              </div>
              <div className="clerafix" />
            </div>
          </div>
        </div>
        {/* //contact */}
        {/* footer */}
        <footer>
          <div className="w3ls-footer-grids pt-sm-4 pt-3">
           
              <div className="row">
                <div className="col-md-4 w3l-footer">
                  <h3 className="mb-sm-3 mb-2 text-white">Quick Links</h3>
                  <div className="nav-w3-l">
                    <ul className="list-unstyled">
                      <li>
                        <div div className="Click" onClick={handleClick}>Home</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div></footer>
      </div>
      
    )}

    export default Appointment ;