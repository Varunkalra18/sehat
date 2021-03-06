import React from "react";
import './Symptoms.css'
import {useState} from "react"
import axios from "axios";
import {useHistory} from "react-router"

function Symptoms()
{
  const [symptoms,setsym] = useState({
    symptom1:"",
    symptom2:"",
    symptom3:"",
    symptom4:"",
    symptom5:""
  })
 
  const handleChanges = (e) => {
    const {name,value} = e.target
    setsym({
      ...symptoms,
      [name]:value
    })
  }
  console.log(symptoms)
  const submit = () => {
    console.log(symptoms)
    axios.post("http://127.0.0.1:5000/diseaseprediction",symptoms)
    .then((res)=>{
      alert(res.data)
    })
  }
 
var history=useHistory();
function handleClick3()
{
  history.push('/admin_home');
}

    return(
      <div>
  <div id="home">
         <div className=" py-1"> 
            <nav className="navbar navbar-expand-lg bg-light fixed-navi">
            
                {/* logo */}
                <h1>
                  <div className="navbar-brand font-weight-bold font-italic Click" onClick={handleClick3} ></div>
                    <span style={{color:"blue"}}>S</span><span style={{color:"cyan"}}>ehat</span>
                    <i className="fas fa-syringe" />
                  
                </h1>
                {/* //logo */}
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul className= "navbar-brand ml-lg-auto">
                  <li className="nav-item active mt-lg-0 mt-3 text-dark mr-5 ">
                      
                    </li></ul>
                    <ul className="navbar-nav ml-lg-auto">
                    <li className= "nav-link Click">
                      <div className="navbar-link Click" onClick={handleClick3}>Home
                      </div>
                    </li>
                    
                 
                 
                  </ul>
                   </div>        
            </nav>
        
      </div></div>


     <div  className="py-5 banner " style={{backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/form-banners/banner2/banner-bg.jpg)'}}>
       
       
      <h1>Disease prediction based on Symptoms</h1>
      <div className="key">
        <div className="box">
       <select class="form-select form-select-lg mb-3"  name="symptom1" onChange={handleChanges} value={symptoms.symptom1} aria-label=".form-select-lg example">        
          
          <option value="1">Itching</option>
          <option value="2">Skin Rash</option>
          <option value="3">Shivering</option>
          <option value="4">Chiils</option>
          <option value="5">Vomiting </option>
          <option value="6">Fatigue</option>
          <option value="7">Cough</option>
          <option value="8">High Fever</option>
          <option value="9">Headache</option>
          <option value="10">Yellowish Skin</option>
          <option value="11">Nausea</option>
          <option value="12">Loss of Appetite</option>
          <option value="13">Back Pain</option>
          <option value="14">Abdominal Pain</option>
          <option value="15">Diarrhoea</option>
          <option value="16">Mild Fever</option>
          <option value="17">Yellowing of Eyes</option>
          <option value="18">Malaise</option>
          <option value="19">Phlegm</option>
          <option value="20">Chest Pain</option>
          <option value="21">Bloody Stool</option>
          <option value="22">Neck Pain</option>
          <option value="23">Enlarged Thyroid</option>
          <option value="24">Stiff Neck</option>
          <option value="25">Loss Of Balance</option>
          <option value="26">Continious Feel of Urine</option>
          <option value="27">Irritability</option>
          <option value="28">Muscle Pain</option>
          <option value="29">Increased Appetite</option>
          <option value="30">Stomach Bleeding</option>
          <option value="31">Palpitations</option>
          <option value="32">Inflammatory Nails</option>
          <option value="33">Yellowish Crusting</option>
        </select>
    
<select class="form-select form-select-lg mb-3" name="symptom2" onChange={handleChanges} value={symptoms.symptom2} aria-label=".form-select-lg example">
      
  <option selected>Select second Symptom</option>
  <option value="1">Itching</option>
          <option value="2">Skin Rash</option>
          <option value="3">Shivering</option>
          <option value="4">Chiils</option>
          <option value="5">Vomiting </option>
          <option value="6">Fatigue</option>
          <option value="7">Cough</option>
          <option value="8">High Fever</option>
          <option value="9">Headache</option>
          <option value="10">Yellowish Skin</option>
          <option value="11">Nausea</option>
          <option value="12">Loss of Appetite</option>
          <option value="13">Back Pain</option>
          <option value="14">Abdominal Pain</option>
          <option value="15">Diarrhoea</option>
          <option value="16">Mild Fever</option>
          <option value="17">Yellowing of Eyes</option>
          <option value="18">Malaise</option>
          <option value="19">Phlegm</option>
          <option value="20">Chest Pain</option>
          <option value="21">Bloody Stool</option>
          <option value="22">Neck Pain</option>
          <option value="23">Enlarged Thyroid</option>
          <option value="24">Stiff Neck</option>
          <option value="25">Loss Of Balance</option>
          <option value="26">Continious Feel of Urine</option>
          <option value="27">Irritability</option>
          <option value="28">Muscle Pain</option>
          <option value="29">Increased Appetite</option>
          <option value="30">Stomach Bleeding</option>
          <option value="31">Palpitations</option>
          <option value="32">Inflammatory Nails</option>
          <option value="33">Yellowish Crusting</option>
</select>
<select class="form-select form-select-lg mb-3" name="symptom3" onChange={handleChanges} value={symptoms.symptom3} aria-label=".form-select-lg example">
        
  <option selected>Select third Symptoms</option>
  <option value="1">Itching</option>
          <option value="2">Skin Rash</option>
          <option value="3">Shivering</option>
          <option value="4">Chiils</option>
          <option value="5">Vomiting </option>
          <option value="6">Fatigue</option>
          <option value="7">Cough</option>
          <option value="8">High Fever</option>
          <option value="9">Headache</option>
          <option value="10">Yellowish Skin</option>
          <option value="11">Nausea</option>
          <option value="12">Loss of Appetite</option>
          <option value="13">Back Pain</option>
          <option value="14">Abdominal Pain</option>
          <option value="15">Diarrhoea</option>
          <option value="16">Mild Fever</option>
          <option value="17">Yellowing of Eyes</option>
          <option value="18">Malaise</option>
          <option value="19">Phlegm</option>
          <option value="20">Chest Pain</option>
          <option value="21">Bloody Stool</option>
          <option value="22">Neck Pain</option>
          <option value="23">Enlarged Thyroid</option>
          <option value="24">Stiff Neck</option>
          <option value="25">Loss Of Balance</option>
          <option value="26">Continious Feel of Urine</option>
          <option value="27">Irritability</option>
          <option value="28">Muscle Pain</option>
          <option value="29">Increased Appetite</option>
          <option value="30">Stomach Bleeding</option>
          <option value="31">Palpitations</option>
          <option value="32">Inflammatory Nails</option>
          <option value="33">Yellowish Crusting</option>
</select>
<select class="form-select form-select-lg mb-3" name="symptom4" onChange={handleChanges} value={symptoms.symptom4} aria-label=".form-select-lg example">
       
  <option selected>Select forth Symptoms</option>
  <option value="1">Itching</option>
          <option value="2">Skin Rash</option>
          <option value="3">Shivering</option>
          <option value="4">Chiils</option>
          <option value="5">Vomiting </option>
          <option value="6">Fatigue</option>
          <option value="7">Cough</option>
          <option value="8">High Fever</option>
          <option value="9">Headache</option>
          <option value="10">Yellowish Skin</option>
          <option value="11">Nausea</option>
          <option value="12">Loss of Appetite</option>
          <option value="13">Back Pain</option>
          <option value="14">Abdominal Pain</option>
          <option value="15">Diarrhoea</option>
          <option value="16">Mild Fever</option>
          <option value="17">Yellowing of Eyes</option>
          <option value="18">Malaise</option>
          <option value="19">Phlegm</option>
          <option value="20">Chest Pain</option>
          <option value="21">Bloody Stool</option>
          <option value="22">Neck Pain</option>
          <option value="23">Enlarged Thyroid</option>
          <option value="24">Stiff Neck</option>
          <option value="25">Loss Of Balance</option>
          <option value="26">Continious Feel of Urine</option>
          <option value="27">Irritability</option>
          <option value="28">Muscle Pain</option>
          <option value="29">Increased Appetite</option>
          <option value="30">Stomach Bleeding</option>
          <option value="31">Palpitations</option>
          <option value="32">Inflammatory Nails</option>
          <option value="33">Yellowish Crusting</option>
</select>
<select class="form-select form-select-lg mb-3" name="symptom5" onChange={handleChanges} value={symptoms.symptom5} aria-label=".form-select-lg example">
     
  <option selected>Select Five Symptoms</option>
  <option value="1">Itching</option>
          <option value="2">Skin Rash</option>
          <option value="3">Shivering</option>
          <option value="4">Chiils</option>
          <option value="5">Vomiting </option>
          <option value="6">Fatigue</option>
          <option value="7">Cough</option>
          <option value="8">High Fever</option>
          <option value="9">Headache</option>
          <option value="10">Yellowish Skin</option>
          <option value="11">Nausea</option>
          <option value="12">Loss of Appetite</option>
          <option value="13">Back Pain</option>
          <option value="14">Abdominal Pain</option>
          <option value="15">Diarrhoea</option>
          <option value="16">Mild Fever</option>
          <option value="17">Yellowing of Eyes</option>
          <option value="18">Malaise</option>
          <option value="19">Phlegm</option>
          <option value="20">Chest Pain</option>
          <option value="21">Bloody Stool</option>
          <option value="22">Neck Pain</option>
          <option value="23">Enlarged Thyroid</option>
          <option value="24">Stiff Neck</option>
          <option value="25">Loss Of Balance</option>
          <option value="26">Continious Feel of Urine</option>
          <option value="27">Irritability</option>
          <option value="28">Muscle Pain</option>
          <option value="29">Increased Appetite</option>
          <option value="30">Stomach Bleeding</option>
          <option value="31">Palpitations</option>
          <option value="32">Inflammatory Nails</option>
          <option value="33">Yellowish Crusting</option>
</select><br/><br/>
<button type="button" class="btn btn-primary btn-block" onClick={submit}>submit</button>
      </div></div></div></div>



    )
}
export default Symptoms;