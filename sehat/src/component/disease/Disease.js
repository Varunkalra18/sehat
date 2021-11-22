import React from "react";
import { useState } from "react";
import axios from "axios"
import './Disease.css'


function Disease()
{
  
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
    return(
         <div>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
        <title>Heart Disease Test</title>
        {/* Java Script */}	
        {/* Navbar*/}
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Heart Disease Test</span>
        </nav>
       
          <br />
          {/*Form*/}
          
        <fieldset>
          <legend>Heart Disease Test Form</legend><br />
          <div className="container">
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