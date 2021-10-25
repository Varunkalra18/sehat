import React from "react";
import { useHistory } from "react-router";
import '../css/All.css'
import b3 from "../images/b3.png"
function Services()
{
    let history1=useHistory()
    function handleClick()
    {
        history1.push('./appointment')
    }
   
    let history3=useHistory()
    function handleClick3()
    {
        history3.push('./disease')
    }
    return(
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
                    <h4 className="text-dark font-weight-bold mb-3"><div className="Click" onClick={handleClick}>
                        Appoint Doctor</div></h4>
                    <p>Take appointment from the doctor</p>
                  </div>
                </div>
                <div className="row wthree_agile_us my-5">
                  <div className="col-3 agile-why-text p-0 text-right">
                    <div className="wthree_features_grid">
                      <i className="fas fa-syringe" />
                    </div>
                  </div>
                  <div className="col-9 agile-why-text-2">
                    <h4 className="text-dark font-weight-bold mb-3">
                    <a href="#donation" > Blood donation</a></h4>
                    <p>Donate your blood</p>
                  </div>
                </div>
                <div className="row wthree_agile_us">
                  <div className="col-3 agile-why-text p-0 text-right">
                    <div className="wthree_features_grid">
                      <i className="fab fa-medrt" />
                    </div>
                  </div>
                  <div className="col-9 agile-why-text-2">
                    <h4 className="text-dark font-weight-bold mb-3">
                        <div className="Click" onClick={handleClick3}>Disease prediction</div></h4>
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
    )
}
export default Services ;