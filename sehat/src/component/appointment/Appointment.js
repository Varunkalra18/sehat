import react from 'react'
import axios from 'axios'
import '../css/bootstrap.css'
import '../css/fontawesome-all.css'
import '../css/style.css'
import { useHistory, withRouter } from 'react-router';
import '../css/All.css'

let Appointment=()=>
{
  let history=useHistory()
  function handleClick(){
    history.push("/")
  }
    return(
     <div>
        <title>Sehat-appointment</title>
        {/* Meta tag Keywords */}
       
        {/* //Web-Fonts */}
        {/* header */}
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
              </div>
            </nav>
          </div>
          {/* //navigation */}
          {/* modal */}
          {/* login */}
          {/* //login */}
          {/* register */}
          {/* //register */}
          {/* //modal */}
        </div>
        {/* //header 2 */}
        {/* banner 2 */}
        <div className="inner-banner-w3ls">
          <div className="container">
          </div>
          {/* //banner 2 */}
        </div>
        {/* page details */}
        <div className="breadcrumb-agile">
          <div aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Appointment</li>
            </ol>
          </div>
        </div>
        {/* //page details */}
        {/* contact */}
        <div className="appointment py-5">
          <div className="py-xl-5 py-lg-3">
            <div className="w3ls-titles text-center mb-5">
              <h3 className="title">Appointment</h3>
              <span>
                <i className="fas fa-user-md" />
              </span>
              <p className="mt-2">Enter your details to get appointment.</p>
            </div>
            <div className="d-flex">
              <div className="appoint-img">
              </div>
              <div className="contact-right-w3l appoint-form">
                <h5 className="title-w3 text-center mb-5">Fill your appointment form</h5>
                <form action="#" method="post">
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Your Name</label>
                    <input type="text" className="form-control" placeholder="Your Name " name="Name" id="recipient-name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-phone" className="col-form-label">Your Email</label>
                    <input type="email" className="form-control" placeholder="Your Email" name="email" id="recipient-phone" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="datepicker" className="col-form-label">Select your doctor</label>
                    <select required className="form-control">
                      <option value>Select your doctor</option>
                      <option value={1}>Anne Dan</option>
                      <option value={2}>Carol Una</option>
                      <option value={3}>Diana Sue</option>
                      <option value={4}>Irene Sally</option>
                      <option value={4}>Jane Mary</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="datepicker" className="col-form-label">Select appointment date</label>
                    <input placeholder="Date" className="date form-control" id="datepicker" type="text" defaultValue onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="datepicker" className="col-form-label">Select appointment time</label>
                    <select required className="form-control">
                      <option value>Select Time</option>
                      <option value={1}>08:00-8:30</option>
                      <option value={2}>08:30-9:00</option>
                      <option value={3}> 09:00-9:30</option>
                      <option value={4}>09:30-10:00</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="datepicker" className="col-form-label">Select City</label>
                    <select required className="form-control">
                      <option value>Select City</option>
                      <option value={1}>city1</option>
                      <option value={2}>city2</option>
                      <option value={3}> city3</option>
                      <option value={4}>city4</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="datepicker" className="col-form-label">Select Speciality</label>
                    <select required className="form-control">
                      <option value>Select Speciality</option>
                      <option value={1}>Dermatology</option>
                      <option value={2}>ENT</option>
                      <option value={3}> Genaral Medicine</option>
                      <option value={4}>Nutritionist</option>
                    </select>
                  </div>
                  <input type="submit" defaultValue="Book Appointment" className="btn_apt" />
                </form>
              </div>
              <div className="clerafix" />
            </div>
          </div>
        </div>
        {/* //contact */}
        {/* footer */}
        <footer>
          <div className="w3ls-footer-grids pt-sm-4 pt-3">
            <div className="container py-xl-5 py-lg-3">
              <div className="row">
                <div className="col-md-4 w3l-footer">
                  <h3 className="mb-sm-3 mb-2 text-white">Quick Links</h3>
                  <div className="nav-w3-l">
                    <ul className="list-unstyled">
                      <li>
                        <div div className="Click" onClick={handleClick}>Home</div>
                      </li>
                      <li className="mt-2">
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div></div></footer>
      </div>
      
    )}

    export default withRouter (Appointment);