import React from 'react'
import './homepage.css'
import b2 from '../images/b2.png'
import b3 from '../images/b3.png'
import b5 from '../images/b5.png'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner2.jpg'
import  bg1 from '../images/bg1.jpg'
import bg2 from '../images/bg2.jpg'
import bg3 from '../images/bg3.jpg'
import bg4 from '../images/bg4.jpg'
import bg6 from '../images/bg6.jpg'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'
import close from '../images/close.png'
import doctor from '../images/doctor.svg'
import carrows from '../images/carrows.png'
import '../css/bootstrap.css'
import '../css/chocolat.css'
import '../css/fontawesome-all.css'
import  '../css/style.css'
import Typewriter from "typewriter-effect";

function Homepage() {
    return (
        <div>
        <title>SEHAT home</title>
       
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Sehat is a health application " />
        {/*// Meta tag Keywords */}
        {/* Custom-Files */}
        <link rel="stylesheet" href="css/bootstrap.css" />
        {/* Bootstrap-Core-CSS */}
        <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
        {/* Style-CSS */}
        <link rel="stylesheet" href="css/fontawesome-all.css" />
        {/* Font-Awesome-Icons-CSS */}
        {/* //Custom-Files */}
        {/* Web-Fonts */}
        <link href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet" />
        <link href="//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet" />
        {/* //Web-Fonts */}
        {/* header */}
        <header>
          {/* top-bar */}
          <div className="top-bar py-3">
            <div className="container">
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
          </div>
        </header>
        {/* //top-bar */}
        {/* header 2 */}
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
                      <a className="nav-link" href="appointment.html">Appointment</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                  {/* login */}
                  <a href="#" className="login-button ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3" data-toggle="modal" data-target="#exampleModalCenter1">
                    <i className="fas fa-sign-in-alt mr-2" />Login</a>
                  {/* //login */}
                </div>
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
        </div>
        {/* //header 2 */}
        {/* banner */}
       
        <div className="slider">
          <div className="callbacks_container">
            <ul className="rslides callbacks callbacks1" id="slider4">
                <div className="banner-top3">
                  <div className="banner-info_agile_w3ls">
                    <div className="container">
                    <div className="typwriter">
           
           <Typewriter
       
            onInit={(typewriter)=> {
       
            typewriter
             
            .typeString("The Health care system of the future, today" )
              
            .pauseFor(100)
            .deleteAll()
            .typeString("Sehat a health care system where you can find disease prediction as well as contribute to society ")
            .start();
            }}
            />
         </div>
                   </div>
                  </div>
                </div>
            </ul>
          </div>
        </div><br/><br/><br/><br/><br/>
        {/* //banner */}
        <div className="clearfix" />
        {/* banner bottom */}
        {/* //banner bottom */}
        {/* middle section */}
        <div id="donation">
          <div className="w3ls-welcome py-5">
            <div className="container py-xl-5 py-lg-3">
              <div className="row">
                <div className="col-lg-5 welcome-right">
                  <img src= {b2} className="img-fluid" />
                </div>
                <div className="col-lg-7 welcome-left mt-4">
                  <h3> “Blood Donation Costs You Nothing, But It Can Mean The World To Someone In Need.”</h3>
                  <h4 className="my-4 font-italic">“Donating Money Is Great, But Donating Blood Is Even Better.”</h4>
                  <p>Click here and contribute in blood donation.</p>
                  <div className="readmore-w3-agileits mt-md-5 mt-4">
                    <a href="single.html" className="w3ls-button-agile text-dark" style={{color: 'red'}}>Donate</a>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
        {/* //middle section */}
        {/* services */}
        <div id="services">
          <div className="why-choose-agile pt-5" id="services">
            <div className="container pt-xl-5 pt-lg-3">
              <div className="w3ls-titles text-center mb-5">
                <h3 className="title">Our Best Services</h3>
                <span>
                  <i className="fas fa-user-md" />
                </span>
                <p className="mt-2">The below services are available</p>
              </div>
              <div className="row why-choose-agile-grids-top">
                <div className="col-lg-4 agileits-w3layouts-grid">
                  <div className="row wthree_agile_us">
                    <div className="col-3 agile-why-text p-0 text-right">
                      <div className="wthree_features_grid">
                        <i className="fas fa-user-md" />
                      </div>
                    </div>
                    <div className="col-9 agile-why-text-2">
                      <h4 className="text-dark font-weight-bold mb-3">Appoint Doctor</h4>
                      <p><a href>Appoint you Doctor</a></p>
                    </div>
                  </div>
                  <div className="row wthree_agile_us my-5">
                    <div className="col-3 agile-why-text p-0 text-right">
                      <div className="wthree_features_grid">
                        <i className="fas fa-syringe" />
                      </div>
                    </div>
                    <div className="col-9 agile-why-text-2">
                      <h4 className="text-dark font-weight-bold mb-3">Blood donation</h4>
                      <p><a href="#donation">Donate your blood </a></p>
                    </div>
                  </div>
                  <div className="row wthree_agile_us">
                    <div className="col-3 agile-why-text p-0 text-right">
                      <div className="wthree_features_grid">
                        <i className="fab fa-medrt" />
                      </div>
                    </div>
                    <div className="col-9 agile-why-text-2">
                      <h4 className="text-dark font-weight-bold mb-3">Disease prediction</h4>
                      <p><a href>Predict your disease just by entering basic values .</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 agileits-w3layouts-grid img text-center spacing">
                  <img src={b3} alt=" " className="img-fluid" />
                </div>
              </div>
            </div>
          </div></div>
        {/* //services */}
        {/* //blog */}
        {/* treatments */}
        <div className="screen-w3ls py-5">
          <div className="container py-xl-5 py-lg-3">
            <div className="w3ls-titles text-center mb-5">
              <h3 className="title">Diseases that you can predict</h3>
              <span>
                <i className="fas fa-user-md" />
              </span>
              <p className="mt-2">The patients are required to select diseases and enter basic valuse.</p>
            </div>
            <div className="row">
              <div className="col-lg-6 w3ls-wthree-screen text-center">
                <img src={b5} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6 w3ls-wthree-texts mt-5">
                <div className="row icons-screen">
                  <div className="col-3 screen-agile text-right">
                    <i className="fas fa-syringe" />
                  </div>
                  <div className="col-9 screen-agile-2">
                    <h5 className="mb-3">Heart rate</h5>
                    <p>Incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut</p>
                  </div>
                </div>
                <div className="row icons-screen mt-5">
                  <div className="col-3 screen-agile text-right">
                    <i className="fab fa-medrt" />
                  </div>
                  <div className="col-9 screen-agile-2">
                    <h5 className="mb-3">Diabites</h5>
                    <p>Incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //treatments */}
        {/* Js files */}
        {/* JavaScript */}
        {/* Default-JavaScript-File */}
        {/* banner slider */}
        {/* //banner slider */}
        {/* fixed navigation */}
        {/* //fixed navigation */}
        {/* smooth scrolling */}
        {/* move-top */}
        {/* easing */}
        {/*  necessary snippets for few javascript files */}
        {/* Necessary-JavaScript-File-For-Bootstrap */}
        {/* //Js files */}
      </div>
    );
  }
export default Homepage ;
