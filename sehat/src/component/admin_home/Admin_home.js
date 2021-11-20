import React from 'react';
import { useHistory } from 'react-router';
import Admin_search from '../admin_search/Admin_search';
import Admin_shedule from '../admin_shedule/Admin_shedule';
import Disease from '../disease/Disease';
import b3 from '../images/b3.png';
import './Admin_home.css';
function Admin_home()
{
    let history1=useHistory()
    function handleClick()
    {
        history1.push('./admin_shedule')
    }
    let history2=useHistory()
    function handleClick2()
    {
        history1.push('./admin_search')
    }
   
    let history3=useHistory()
    function handleClick3()
    {
        history3.push('./disease')
    }
    return(

        <div id="services">
          <div id="home">
    {/* navigation */}
    <div className="main-top py-1">
      <nav className="navbar navbar-expand-lg navbar-light fixed-navi">
       
          {/* logo */}
          <h1 className="navbar-brand font-weight-bold font-italic">
              Sehat
              <i className="fas fa-syringe" />
          </h1>
          {/* //logo */}
         <div className="pad">
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            {/* login */}
            <div className="navbar">
            <a href="#" className="login-button ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3 ml-5" data-toggle="modal" data-target="#exampleModalCenter1">
              <i className="fas fa-sign-in-alt " />Logout</a>
           </div>
            {/* //login */}
          </div></div>
        
      </nav>
    </div>
  </div>
  <br/><br/><br/><br/>
        <div className="why-choose-agile pt-5" id="services">
          <div className="container pt-xl-5 pt-lg-3">
            <div className="w3ls-titles text-center mb-5">
              <h3 className="title">Best Services available</h3>
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
                    <h4 className="text-dark font-weight-bold mb-3"><div className="Click">
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
                    <h4 className="text-dark font-weight-bold mb-3"><div className="Click" onClick={handleClick}>
                        Check Appointments</div></h4>
                    <p>Take appointment from the doctor</p>
                  </div>
                </div>
                </div>
           
            <div className="col-lg-4 agileits-w3layouts-grid img text-center spacing">
                <img src={b3} alt=" " className="img-fluid" />
              </div>
              <div class="col-lg-4 agileits-w3layouts-grid">
              <div class="row wthree_agile_us my">
      
              <div className="col-9 agile-why-text-2">
                    <h4 className="text-dark font-weight-bold mb-3">
                    <div className="Click" onClick={handleClick2} > Blood Announcement</div></h4>
                    <p>Check for blood requirements</p>
                  </div>
						<div class="col-3 agile-why-text p-0">
							<div class="wthree_features_grid">
								<i class="fas fa-medkit"></i>
							</div>
						</div>
					</div><br/><br/><br/>
          <div class="row wthree_agile_us pl-2 ">
              <div className="col-9 agile-why-text-2">
              <h4 className="text-dark font-weight-bold mb-3">
                        <div className="Click" onClick={handleClick3}>Disease prediction</div></h4>
                    <p>Predict your disease just by entering basic values.</p>
                  </div>
						<div class="col-3 agile-why-text p-0 ">
							<div class="wthree_features_grid">
								<i class="fas fa-medkit"></i>
							</div>
						</div>
					</div>
          
          
          
          
          </div>
              </div>
          </div>
        </div></div>
    )
}

export default Admin_home;