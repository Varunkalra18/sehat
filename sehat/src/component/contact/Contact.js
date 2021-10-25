import React from "react";

function Contact()
{
    return(
<div>
        <title>Sehat-contact</title>
        {/* Meta tag Keywords */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Sehat" />
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
                <div className="col-lg-5 top-social-agile text-lg-right text-center">
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
              </div>
            </nav>
          </div></div>
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
            </div>
          </div>
        </div>
        {/* //login */}
        {/* register */}
        {/* //register */}
        {/* //modal */}
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
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </div>
        </div>
        {/* //page details */}
        {/* contact */}
        <div className="agileits-contact py-5">
          <div className="py-xl-5 py-lg-3">
            <div className="w3ls-titles text-center mb-5">
              <h3 className="title">Contact</h3>
              <span>
                <i className="fas fa-user-md" />
              </span>
              <p className="mt-2">Please enter the details</p>
            </div>
            <div className="d-flex">
              <div className="col-lg-5 w3_agileits-contact-left">
              </div>
              <div className="col-lg-7 contact-right-w3l">
                <h5 className="title-w3 text-center mb-5">Get In Touch</h5>
                <form action="#" method="post">
                  <div className="d-flex space-d-flex">
                    <div className="form-group grid-inputs">
                      <input type="text" className="name form-control" name="First Name" placeholder="First Name" required />
                    </div>
                    <div className="form-group grid-inputs">
                      <input type="text" className="name form-control" name="Last Name" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="name form-control" name="Email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="name form-control" name="Subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" required className="form-control" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* //contact */}
        {/* Map */}
        {/* //Map */}
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
                        <a href="index.html">Home</a>
                      </li>
                      <li className="mt-2">
                        <a href="appointment.html">Appointment</a>
                      </li>
                      <li className="mt-2">
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
       
      </div>
    )
}

export default Contact;