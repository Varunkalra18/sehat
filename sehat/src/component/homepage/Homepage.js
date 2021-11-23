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
 var history=useHistory()
 function handleClick2()
 {
   history.push('/symptoms');
 }
 var history=useHistory()
 function handleClick3()
 {
   history.push('/diabities');
 }
 var history=useHistory()
 function handleClick4()
 {
   history.push('/corona');
 }
 
  
  const tokens = localStorage.getItem("user")

  return (
        <div>
        <title>SEHAT home</title>
        {/* Nabar is in navbar folder*/}
        <Navbar token = {tokens}></Navbar>
        
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
            <div className="row mr-5">
              <div className="flex1">
              <div className="col-lg-6 w3ls-wthree-texts">
              <div className="box2">
                <div className="row icons-screen">
                  <div className="col-3 screen-agile text-right">
                    <i className="fas fa-syringe" />
                  </div>
                  <div className="col-9 screen-agile-2 text-primary">
                    <div onClick={handleClick} className="Click">
                      <h5>Heart rate</h5></div>
                    <p>You can predict the heart rate just by enetring basic details like heat rate using heart rate monitoring</p>
                  </div>
                </div></div><br/>
                <div className="box2">
                  <div className="row icons-screen ">
                    <div className="col-3 screen-agile text-right mt">
                      <i className="fas fa-syringe" />
                    </div>
                    <div className="col-9 screen-agile-2  text-primary">
                      <div onClick={handleClick2} className="Click">                      
                      <h5>Based on Symptoms</h5></div>
                      <p>Enter the synmptoms you are facing and we will predict your disease.</p>
                    </div>
                  </div></div><br/>
                  <div className="box2">
                  <div className="row icons-screen ">
                    <div className="col-3 screen-agile text-right ">
                      <i className="fas fa-syringe" />
                    </div>
                  <div className="col-9 screen-agile-2  text-primary">
                    <div onClick={handleClick3} className="Click">
                    <h5>Diabites</h5></div>
                    <p >Enter the blood glucose level in the body and the model will do prediction for Diabites</p>
                  </div></div></div><br/>
                  <div className="box2">
                  <div className="row icons-screen">
                    <div className="col-3 screen-agile text-right ">
                      <i className="fas fa-syringe" />
                    </div>
                  <div className="col-9 screen-agile-2  text-primary">
                    <div onClick={handleClick4} className="Click">
                    <h5>Corona</h5></div>
                    <p>Ente the basic details like oxygen level</p>
                  </div></div></div>
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
       
      </div>
    );
  }
export default Homepage ;
