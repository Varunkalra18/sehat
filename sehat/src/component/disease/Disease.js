import React from "react";
import { useState } from "react";
import axios from "axios"
import './Disease.css'
import { useHistory } from "react-router";

function Disease()
{
var history=useHistory();
function handleClick1()
{
  history.push('/admin_search');
}
var history=useHistory();
function handleClick2()
{
  history.push('/admin_shedule');
}
var history=useHistory();
function handleClick3()
{
  history.push('/admin_home');
}


  const [heartData, setData] = useState({
    age:"",
    gender:"",
    cp:"",
    trestbps:"",
    chol:"",
    fbs:"",
    recg:"",
    mhr:"",
    ia:"",
    dind:"",
    slope:"",
    cf:"",
    thales:""
  })
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setData({
      ...heartData,
      [name]:value
    })
  }
  console.log(heartData)
  const call = ()=>{
    axios.post("http://127.0.0.1:5000/heartdiseaseprediction", heartData)
    .then(res=>alert(res.data))
  }
  const logout = () => {
    localStorage.clear() ;
    console.log("we have logged out")
    history.push("/admin_login")
    
  }
    return(
         <div  className="banner p2" style={{backgroundImage: "url(https://media.istockphoto.com/photos/diagnostic-tools-get-a-digital-upgrade-picture-id1300505874?b=1&k=20&m=1300505874&s=170667a&w=0&h=hOrTwHO2kbh8a6Q6SFnh0vcyZytJdlMepDIwGTeWEFw=)"}}>
             <div id="home">
         
            <nav className="navbar navbar-expand-lg bg-dark fixed-navi">
            
                {/* logo */}
                <h1>
                  <div className="navbar-brand font-weight-bold font-italic Click" onClick={handleClick3} ></div>
                    <span>S</span>ehat
                    <i className="fas fa-syringe" />
                  
                </h1>
                {/* //logo */}
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul className="navbar-brand ml-lg-auto">
                  <li className="nav-item active mt-lg-0 mt-3 text-dark mr-5 ">
                      
                    </li></ul>
                    <ul className="navbar-nav ml-lg-auto">
                    <li className= "nav-link Click">
                      <div className="navbar-link Click" onClick={handleClick3}>Home
                      </div>
                    </li>
                    
                    <li className="nav-item mx-lg-4 my-lg-0 my-3">
                    <div className="nav-link Click" onClick={handleClick1} >Blood Requirements
                    </div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link Click " onClick={handleClick2}>Sedule Appointment</div>
                    </li>
                  </ul>
                  
                  <div className="login-button Click ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3 text-primary" onClick={logout} data-toggle="modal" data-target="#exampleModalCenter1">
                    <i className="fas fa-sign-in-alt mr-2 "/>Logout
                </div> </div>        
            </nav>
        
      </div>
      
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
        <title>Heart Disease Test</title>
        {/* Java Script */}	
        {/* Navbar*/}
      
       
          <br /><br/><br/><br/>
          {/*Form*/}
          
        <fieldset>
          <legend style={{color:"brown"}}>Heart Disease Test Form</legend><br />
        <div className="c1">
          <div className="card card-body">
            <div className="form-group  row">
              <div className="p">
              <div className="col-sm-4">
                <span>Age *</span>
                <input type="number" className="form-control" id="age" name="age" value={heartData.age} onChange={handleChange} required />
              </div>
              <div className="col-sm-4">
                <span>Gender</span>
                <select className="form-control" id="sex" name="gender" onChange={handleChange}  value={heartData.gender} required>
                  <option disabled selected value> -- Select an Option -- </option>
                  <option value={0}>Male</option>
                  <option value={1}>Female</option>
                </select>
              </div>
              <div className="col-sm-4 ">
            <span> Chest Pain Type</span>
                <select className="form-control" id="cp" name="cp" onChange={handleChange}  value={heartData.cp} required>
                  <option disabled selected value> -- Select an Option -- </option>
                  <option value={0}>Typical Angina</option>
                  <option value={1}>Atypical Angina</option>
                  <option value={2}>Non-anginal Pain</option>
                  <option value={3}>Asymptomatic</option>
                </select>
              </div>
            </div></div>
        <br/>
            <div className="form-group  row">
            <div className="p">
              <div className="col-sm">
                <span>Resting Blood Pressure in mm Hg</span>
                <input type="number" className="form-control" id="trestbps" name="trestbps" onChange={handleChange}  value={heartData.trestbps}  required />
              </div>
              <div className="col-sm">
                <span>Serum Cholestoral in mg/dl</span>
                <input type="number" className="form-control" id="chol" name="chol" onChange={handleChange}  value={heartData.chol} required />
              </div>
              <div className="col-sm">
                <span>Fasting Blood Sugar &gt; 120 mg/dl</span>
                <select className="form-control" id="fbs" name="fbs" onChange={handleChange}  value={heartData.fbs} required>
                  <option disabled selected value> -- Select an Option -- </option>
                  <option value={0}>False</option>
                  <option value={1}>True</option>
                </select>
              </div>
            </div></div>
            <br />
            <div className="form-group row">
              <div className="p">
              <div className="col-sm">
                <span>Resting ECG Results </span>
                <select className="form-control" id="restecg" name="recg" onChange={handleChange}  value={heartData.recg} required>
                  <option disabled selected value> -- Select an Option -- </option>
                  <option value={0}>Normal</option>
                  <option value={1}>Having ST-T wave abnormality</option>
                  <option value={2}> Probable or definite left ventricular hypertrophy</option>
                </select>
              </div>
              <div className="col-sm">
                <span>Maximum Heart Rate</span>
                <input type="number" className="form-control" id="thalach" name="mhr" onChange={handleChange}  value={heartData.mhr} required />
              </div>
              <div className="col-sm">
                <span>Exercise Induced Angina </span>
                <select className="form-control" id="oldpeak" name="ia" onChange={handleChange}  value={heartData.ia} required>
                  <option disabled selected value> -- Select an Option -- </option>
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
                </select>
              </div>
             
            </div></div>
            <br />
            <div className="form-group  row">
              <div className="p">
            <div className="col-sm">
                <span>ST Depression Induced</span>
                <input type="number" step="any" className="form-control" id="exang" name="dind" onChange={handleChange}  value={heartData.dind}  required />
              </div>
              <div className="col-sm">
                <span>Slope of the Peak Exercise ST Segment </span>
                <select className="form-control" id="slope" name="slope" onChange={handleChange}  value={heartData.slope} required>
                  <option disabled selected value> -- Select an Option -- </option>
                  <option value={0}>Upsloping</option>
                  <option value={1}>Flat</option>
                  <option value={2}>Downsloping</option>
                </select>
              </div></div></div><br/>
              <div className="form-group  row">
                <div className="p">
              <div className="col-sm">
                <span>Number of Vessels Colored by Flourosopy</span>
                <select className="form-control" id="ca" name="cf" onChange={handleChange}  value={heartData.cf} required>
                  <option disabled selected value> -- Select an Option -- </option>
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <div className="col-sm">
                <span>Thalassemia</span>
                <select className="form-control" id="thal" name="thales" onChange={handleChange}  value={heartData.thales}  required>
                  <option disabled selected value> -- Select an Option -- </option>
                  <option value={3}>Normal</option>
                  <option value={6}>Fixed defect</option>
                  <option value={7}>Reversable defect</option>
                </select>
              </div>
            </div></div>
            <br />
            <div className="form-group">
              <button className="btn btn-primary"  onClick={call} type="submit" >Predict</button>
            </div>
          </div></div>
        </fieldset>
      
         
        
    </div>
    )
}

export default Disease;