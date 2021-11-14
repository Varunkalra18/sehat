import React from 'react'
import {useHistory} from 'react-router-dom'
import '../css/bootstrap.css'
import '../css/chocolat.css'
import '../css/fontawesome-all.css'
import  '../css/style.css'
import './Navbar.css'
import Contact from '../contact/Contact'
import Admin_login from '../admin_login/Admin_login'

function Navbar()
{
let history=useHistory()  
  function handleClick() {
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
return (
    <div>
      <body>
    <header>
    {/* top-bar */}
    <div className="top-bar py-3">
      
        <div className="row">
          <div className="col-lg-7 top-social-agile">
            <div className="row">
              {/* social icons */}
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
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul className="navbar-brand ml-lg-auto">
            <li className="nav-item active mt-lg-0 mt-3 text-dark mr-5 ">
                <div className="Click" onClick={handleClick3}>
                  Admin
                </div>
              </li></ul>
              <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item active mt-lg-0 mt-3">
                <a className="navbar-link" href="index.html">Home
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
               <div className="Click" onClick={handleClick} >Appointment
               </div>
              </li>
              <li className="nav-item">
                <div className="nav-link Click" onClick={handleClick2}>Contact Us</div>
              </li>
            </ul>
            {/* login */}
            <a href="#" className="login-button ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3" data-toggle="modal" data-target="#exampleModalCenter1">
              <i className="fas fa-sign-in-alt mr-2" />Login</a>
            {/* //login */}
          </div>
        
      </nav>
    </div>
    {/* //navigation */}
    {/* modal */}
    {/* login */}
    <div className="modal fade" id="exampleModalCenter1" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="login px-4 mx-auto mw-100">
              <h5 className="text-center mb-4">Login Now</h5>
              <form action="#" method="post">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" className="form-control" name="name" placeholder required />
                </div>
                <div className="form-group">
                  <label className="mb-2">Password</label>
                  <input type="password" className="form-control" name="password" placeholder required />
                </div>
                <button type="submit" className="btn submit mb-4">Login</button>
                <p className="forgot-w3ls text-center pb-4">
                  <a href="#" className="text-white">Forgot your password?</a>
                </p>
                <p className="account-w3ls text-center pb-4">
                  Don't have an account?
                  <a href="#" data-toggle="modal" data-target="#exampleModalCenter2">Create one now</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* //login */}
    {/* register */}
    <div className="modal fade" id="exampleModalCenter2" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-content-2">
          <div className="modal-header text-center">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="login px-4 mx-auto mw-100">
              <h5 className="text-center mb-4">Register Now</h5>
              <form action="#" method="post">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" className="form-control" name="name" placeholder required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" name="email" placeholder required />
                </div>
                <div className="form-group">
                  <label className="mb-2">Password</label>
                  <input type="password" className="form-control" name="password" id="password1" placeholder required />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control" name="password" id="password2" placeholder required />
                </div>
                <button type="submit" className="btn btn-primary submit mb-4">Register</button>
                <p className="text-center pb-2">
                  <a href="#" className="text-white">By clicking Register, I agree to your terms</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* //register */}
    {/* //modal */}
  </div></body></div>
)
}

export default Navbar;