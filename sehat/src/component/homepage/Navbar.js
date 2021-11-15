import React from 'react'
import '../css/bootstrap.css'
import '../css/chocolat.css'
import '../css/fontawesome-all.css'
import  '../css/style.css'
import './homepage.css'
import {useHistory} from 'react-router-dom'
function Navbar(props) {
  const history = useHistory();
  const tok = props.token
  const logout = () =>{
    localStorage.clear();
    history.push("/")
  }
  if(tok)
  {
    return (
        
      <div>
          <div id="home">
        {/* navigation */}
        <div className="main-top py-1">
          <nav className="navbar navbar-expand-lg navbar-light fixed-navi">
            <div className="container">
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
              <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul className="navbar-nav ml-lg-auto">
                  <li className="nav-item active mt-lg-0 mt-3">
                    <a className="nav-link" href="index.html">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item mx-lg-4 my-lg-0 my-3">
                    <a className="nav-link" href="#donation">Donation</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Services
                    </a>
                  </li>
                  <li className="nav-item mx-lg-4 my-lg-0 my-3">
                    <div onClick={()=>history.push("/appointment")}>
                    <a className="nav-link" >Appointment</a></div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact Us</a>
                  </li>
                </ul>
                
                <span className="login-button ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3" data-toggle="modal" onClick={logout}>
                  <i className="fas fa-sign-in-alt mr-2" />Logout</span>
                {/* //login */}
              </div>
            </div>
          </nav>
        </div>
      </div>
      </div>
  )
  }
  else{
    return (
        
      <div>
          <div id="home">
        {/* navigation */}
        <div className="main-top py-1">
          <nav className="navbar navbar-expand-lg navbar-light fixed-navi">
            <div className="container">
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
              <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul className="navbar-nav ml-lg-auto">
                  <li className="nav-item active mt-lg-0 mt-3">
                    <a className="nav-link" href="index.html">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item mx-lg-4 my-lg-0 my-3">
                    <a className="nav-link" href="#donation">Donation</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Services
                    </a>
                  </li>
                  <li className="nav-item mx-lg-4 my-lg-0 my-3">
                    <div onClick={()=>history.push("/appointment")}>
                    <a className="nav-link" >Appointment</a></div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact Us</a>
                  </li>
                </ul>
                
                <span className="login-button ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3" data-toggle="modal" onClick={()=>history.push("/login")}>
                  <i className="fas fa-sign-in-alt mr-2" />Login</span>
                {/* //login */}
              </div>
            </div>
          </nav>
        </div>
      </div>
      </div>
  )
  }
  
    
}

export default Navbar
