import React from "react";
import './Admin_shedule.css'
function Admin_shedule()
{
    return(
        
        <div className="banner3">
        <div className="py-5 banner" style={{backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/form-banners/banner2/banner-bg.jpg)'}}>
          
            <div className="row">
              <div className="col-md-7 col-lg-5">
                <h3 className="my-3 text-white font-weight-medium text-uppercase">Shedule Appointment</h3>
                <div className="bg-white">
                  <div className="form-row border-bottom">
                    <div className="p-4 left border-right w-50">
                      <label className="text-inverse font-12 text-uppercase">First Name</label>
                      <input type="text" className="border-0 p-0 font-14 form-control" placeholder="First Name" />
                    </div>
                    <div className="p-4 right w-50">
                      <label className="text-inverse font-12 text-uppercase">Last Name</label>
                      <input type="text" className="border-0 p-0 font-14 form-control" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="form-row border-bottom p-4">
                    <label className="text-inverse font-12 text-uppercase">Email Address</label>
                    <input type="text" className="border-0 p-0 font-14 form-control" placeholder="Enter your Email Address" />
                  </div>
                  <div className="form-row border-bottom p-4">
                    <label className="text-inverse font-12 text-uppercase">Phone Number</label>
                    <input type="text" className="border-0 p-0 font-14 form-control" placeholder="Enter your Phone Number" />
                  </div>
                  <div className="form-row border-bottom p-4 position-relative">
                    <label className="text-inverse font-12 text-uppercase">Shedule Date</label>
                    <div className="input-group date">
                      <input type="text" className="border-0 p-0 font-14 form-control" id="dp" placeholder="Select the Appointment Date" />
                      <label className="mt-2" htmlFor="dp"><i className="icon-calendar mt-1" /></label>
                    </div>
                  </div>
                  <div className="form-row border-bottom p-4">
                    <label className="text-inverse font-12 text-uppercase">Message</label>
                    <textarea col={1} row={1} className="border-0 p-0 font-weight-light font-14 form-control" placeholder="Write Down the Message" defaultValue={""} />
                  </div>
                  <div>
                    <button className="m-0 border-0 py-4 font-14 font-weight-medium btn btn-danger-gradiant btn-block position-relative rounded-0 text-center text-white text-uppercase">
                      <span>Book Yor Appointment Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
       
        </div>
      </div>
     
    );
  }
   

export default Admin_shedule;