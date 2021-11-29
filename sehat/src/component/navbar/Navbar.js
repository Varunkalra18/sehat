import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../css/bootstrap.css'
import '../css/chocolat.css'
import '../css/fontawesome-all.css'
import  '../css/style.css'
import './Navbar.css'


    function Navbar(props){
      
      const history=useHistory()  
      const handleClick = () => {
        history.push("/appointment");
      }
      let history2=useHistory()
      function handleClick2()
      {
        history2.push('/contact')
      }
      let history3=useHistory()
      function handleClick3()
      {
        history3.push('/admin_login')
      }
      const login = () => {
        history.push("/login")
      }
      const logout = () => {
        localStorage.clear() ;
        console.log("we have logged out")
        history.push("/")
      }
      let tokens = props.token
      console.log(tokens)
      if(tokens)
      {
        return (
        <div>    
          <header>       
            <div className="top-bar py-3">
              <div className="row">
                <div className="col-lg-7 top-social-agile">
                  <div className="row">
                   
                    <ul className="col-lg-4 col-6 top-right-info text-center">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="mx-3">
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                      <li className="ml-3">
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                    {/* //social icons */}
                  </div>
                </div>
              </div>
            </div>
        </header>
        <div id="home">
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
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul className="navbar-brand ml-lg-auto">
                  <li className="nav-item active mt-lg-0 mt-3 text-dark mr-5 ">
                      
                    </li></ul>
                    <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item active mt-lg-0 mt-3">
                      <Link activeClassName="navbar-link" to='/' >Home
                        <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item mx-lg-4 my-lg-0 my-3">
                      <Link activeClassName="nav-link" to='/donation'>Donation</Link>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Services
                      </a>
                    </li>
                    
                    <li className="nav-item mx-lg-4 my-lg-0 my-3">
                    <div className="Click" onClick={handleClick} >Appointment
                    </div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link Click" onClick={handleClick2}>Contact Us</div>
                    </li>
                  </ul>
                  
                  <div className="login-button ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3 text-primary" onClick={logout} data-toggle="modal" data-target="#exampleModalCenter1">
                    <i className="fas fa-sign-in-alt mr-2 "/>Logout
                </div> </div>        
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
                <ul className="navbar-brand ml-lg-auto">
                  <li className="nav-item active mt-lg-0 mt-3 text-dark mr-5 ">
                      
                    </li></ul>
                    <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item active mt-lg-0 mt-3">
                      <Link className="navbar-link" to='/'>Home
                        <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item mx-lg-4 my-lg-0 my-3">
                      <Link className="nav-link" to='/donation'>Donation</Link>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Services
                      </a>
                    </li>
                    
                    <li className="nav-item mx-lg-4 my-lg-0 my-3">
                    <div className="Click" onClick={handleClick} >Appointment
                    </div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link Click" onClick={handleClick2}>Contact Us</div>
                    </li>
                  </ul>
                  {/* login */}
                  <a className="login-button ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3" onClick={login} data-toggle="modal" data-target="#exampleModalCenter1">
                    <i className="fas fa-sign-in-alt mr-2" />Login</a>
                  
                  {/* //login */}
                </div>
              
            </nav>
          </div>
    
        </div></div>
      )
      }
    }

    export default Navbar;