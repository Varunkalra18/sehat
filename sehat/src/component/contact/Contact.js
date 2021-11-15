import React from "react";
import Homepage from "../homepage/Homepage";
import Appointment from "../appointment/Appointment";
import { useHistory } from "react-router"; 

function Contact()
{
let history=useHistory()
function handleClick1()
{
  history.push('/')
}
let history2=useHistory()
  function handleClick2()
  {
    history2.push('/appointment')
  }

    return(
<div>
        <title>Sehat-contact</title>
       
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

        <div className="inner-banner-w3ls">
         
          {/* //banner 2 */}
        </div>
        {/* page details */}
        <div className="breadcrumb-agile">
          <div aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </div>
        </div>
        {/* //page details */}
        {/* contact */}
        <div className="agileits-contact py-5">
          <div className="py-xl-5 py-lg-3">
            <div className="w3ls-titles text-center mb-5">
              <h3 className="title">Contact</h3>
              <span>
                <i className="fas fa-user-md" />
              </span>
              <p className="mt-2">Please enter the details</p>
            </div>
            <div className="d-flex">
              <div className="col-lg-5 w3_agileits-contact-left">
              </div>
              <div className="col-lg-7 contact-right-w3l">
                <h5 className="title-w3 text-center mb-5">Get In Touch</h5>
                <form action="#" method="post">
                  <div className="d-flex space-d-flex">
                    <div className="form-group grid-inputs">
                      <input type="text" className="name form-control" name="First Name" placeholder="First Name" required />
                    </div>
                    <div className="form-group grid-inputs">
                      <input type="text" className="name form-control" name="Last Name" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="name form-control" name="Email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="name form-control" name="Subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" required className="form-control" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* //contact */}
        {/* Map */}
        {/* //Map */}
        {/* footer */}
        <footer>
          <div className="w3ls-footer-grids pt-sm-4 pt-3">
            
              <div className="row">
                <div className="col-md-4 w3l-footer">
                  <h3 className="mb-sm-3 mb-2 text-white">Quick Links</h3>
                  <div className="nav-w3-l">
                    <ul className="list-unstyled">
                      <li>
                        <div className="Click" onClick={handleClick1}> Home</div>
                      </li>
                      <li className="mt-2">
                        <div className="Click" onClick={handleClick2}>Appointment</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            
          </div>
        </footer>
       
      </div>
    )
}

export default Contact;