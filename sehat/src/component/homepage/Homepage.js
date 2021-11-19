import React from 'react'
import './homepage.css'
import b5 from '../images/b5.png'
import '../css/bootstrap.css'
import '../css/chocolat.css'
import '../css/fontawesome-all.css'
import  '../css/style.css'
import { useHistory } from 'react-router'
import Navbar from '../navbar/Navbar'
import Typewriter from '../typewritter1/Typewritter1'
import Donation from '../donation/Donation'
import Services from '../services/Services'
function Homepage() {
 var history=useHistory()
 function handleClick()
 {
   history.push('/disease');
 }
  
  return (
        <div>
        <title>SEHAT home</title>
        {/* Nabar is in navbar folder*/}
    <Navbar></Navbar>
        
        {/* Typwriter is in typwriter folder */}
       <Typewriter></Typewriter>
        <br/><br/><br/><br/><br/>
        <div className="clearfix" />
        {/* Donation is in donation folder */}
        <Donation></Donation>
        {/* services */}
       <Services></Services>
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
                    <h5 className="mb-3"><div onClick={handleClick} className="Click">Heart rate</div></h5>
                    <p>You can predict the heart rate just by enetring basic details like heat rate using heart rate monitoring</p>
                  </div>
                </div>
                <div className="row icons-screen mt-5">
                  <div className="col-3 screen-agile text-right">
                    <i className="fab fa-medrt" />
                  </div>
                  <div className="col-9 screen-agile-2">
                    <h5 className="mb-3">Diabites</h5>
                    <p>Enter the blood glucose level in the body and the model will do prediction for Diabites</p>
                  </div>
                  <div className="col-3 screen-agile text-right">
                    <i className="fab fa-medrt" />
                  </div>
                  <div className="col-9 screen-agile-2">
                    <h5 className="mb-3">Corona</h5>
                    <p>Ente the basic details like oxygen level</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
export default Homepage ;
