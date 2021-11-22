import React from "react";
import './Symptoms.css'
import {useState} from "react"
import axios from "axios";

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
    return(
     <div>
        <h1>Disease prediction based on Symptoms</h1>
      <div className="key">
        <div className="box">
       <select class="form-select form-select-lg mb-3" value={symptoms.symptom1} name="symptom1" onChange={handleChanges} aria-label=".form-select-lg example">        
          
          <option value="1">Itching</option>
          <option value="2">Skin Rash</option>
          <option value="3">Chiils</option>
          <option value="4">Vomiting </option>
          <option value="5">Cough</option>
          <option value="6">Fatigue</option>
          <option value="7">High Fever</option>
          <option value="8">Headache</option>
          <option value="9">Yellowish Skin</option>
          <option value="10">Nausea</option>
          <option value="11">Loss of Appetite</option>
          <option value="12">Back Pain</option>
          <option value="13">Abdominal Pain</option>
          <option value="14">Diarrhoea</option>
          <option value="15">Mild Fever</option>
          <option value="16">Yellowing of Eyes</option>
          <option value="17">Chest Pain</option>
          <option value="18">Fast Heart Rate</option>
          <option value="19">Pain During Bowel Movements</option>
          <option value="20">Neck Pain</option>
          <option value="21">Stiff Neck</option>
          <option value="22">Swelling Joints</option>
          <option value="23">Loss Of Balance</option>
          <option value="24">Continious Feel of Urine</option>
          <option value="25">Depression</option>
          <option value="26">Irritability</option>
          <option value="27">Muscle Pain</option>
          <option value="28">Abnormal Mensuration</option>
          <option value="29">Polyuria</option>
          <option value="30">Coma</option>
          <option value="31">Small Dents in Nails</option>
          <option value="32">Blister</option>
        </select>
    
<select class="form-select form-select-lg mb-3" name="symptom2" onChange={handleChanges} value={symptoms.symptom2} aria-label=".form-select-lg example">
      
  <option selected>Select second Symptom</option>
  <option value="1">Itching</option>
  <option value="2">Skin Rash</option>
  <option value="3">Chiils</option>
  <option value="4">Vomiting </option>
  <option value="5">Cough</option>
  <option value="6">Fatigue</option>
  <option value="7">High Fever</option>
  <option value="8">Headache</option>
  <option value="9">Yellowish Skin</option>
  <option value="10">Nausea</option>
  <option value="11">Loss of Appetite</option>
  <option value="12">Back Pain</option>
  <option value="13">Abdominal Pain</option>
  <option value="14">Diarrhoea</option>
  <option value="15">Mild Fever</option>
  <option value="16">Yellowing of Eyes</option>
  <option value="17">Chest Pain</option>
  <option value="18">Fast Heart Rate</option>
  <option value="19">Pain During Bowel Movements</option>
  <option value="20">Neck Pain</option>
  <option value="21">Stiff Neck</option>
  <option value="22">Swelling Joints</option>
  <option value="23">Loss Of Balance</option>
  <option value="24">Continious Feel of Urine</option>
  <option value="25">Depression</option>
  <option value="26">Irritability</option>
  <option value="27">Muscle Pain</option>
  <option value="28">Abnormal Mensuration</option>
  <option value="29">Polyuria</option>
  <option value="30">Coma</option>
  <option value="31">Small Dents in Nails</option>
<option value="32">Blister</option>
</select>
<select class="form-select form-select-lg mb-3" name="symptom3" onChange={handleChanges} value={symptoms.symptom3} aria-label=".form-select-lg example">
        
  <option selected>Select third Symptoms</option>
  <option value="1">Itching</option>
  <option value="2">Skin Rash</option>
  <option value="3">Chiils</option>
  <option value="4">Vomiting </option>
  <option value="5">Cough</option>
  <option value="6">Fatigue</option>
  <option value="7">High Fever</option>
  <option value="8">Headache</option>
  <option value="9">Yellowish Skin</option>
  <option value="10">Nausea</option>
  <option value="11">Loss of Appetite</option>
  <option value="12">Back Pain</option>
  <option value="13">Abdominal Pain</option>
  <option value="14">Diarrhoea</option>
  <option value="15">Mild Fever</option>
  <option value="16">Yellowing of Eyes</option>
  <option value="17">Chest Pain</option>
  <option value="18">Fast Heart Rate</option>
  <option value="19">Pain During Bowel Movements</option>
  <option value="20">Neck Pain</option>
  <option value="21">Stiff Neck</option>
  <option value="22">Swelling Joints</option>
  <option value="23">Loss Of Balance</option>
  <option value="24">Continious Feel of Urine</option>
  <option value="25">Depression</option>
  <option value="26">Irritability</option>
  <option value="27">Muscle Pain</option>
  <option value="28">Abnormal Mensuration</option>
  <option value="29">Polyuria</option>
  <option value="30">Coma</option>
  <option value="31">Small Dents in Nails</option>
<option value="32">Blister</option>
</select>
<select class="form-select form-select-lg mb-3" name="symptom4" onChange={handleChanges} value={symptoms.symptom4} aria-label=".form-select-lg example">
       
  <option selected>Select forth Symptoms</option>
  <option value="1">Itching</option>
  <option value="2">Skin Rash</option>
  <option value="3">Chiils</option>
  <option value="4">Vomiting </option>
  <option value="5">Cough</option>
  <option value="6">Fatigue</option>
  <option value="7">High Fever</option>
  <option value="8">Headache</option>
  <option value="9">Yellowish Skin</option>
  <option value="10">Nausea</option>
  <option value="11">Loss of Appetite</option>
  <option value="12">Back Pain</option>
  <option value="13">Abdominal Pain</option>
  <option value="14">Diarrhoea</option>
  <option value="15">Mild Fever</option>
  <option value="16">Yellowing of Eyes</option>
  <option value="17">Chest Pain</option>
  <option value="18">Fast Heart Rate</option>
  <option value="19">Pain During Bowel Movements</option>
  <option value="20">Neck Pain</option>
  <option value="21">Stiff Neck</option>
  <option value="22">Swelling Joints</option>
  <option value="23">Loss Of Balance</option>
  <option value="24">Continious Feel of Urine</option>
  <option value="25">Depression</option>
  <option value="26">Irritability</option>
  <option value="27">Muscle Pain</option>
  <option value="28">Abnormal Mensuration</option>
  <option value="29">Polyuria</option>
  <option value="30">Coma</option>
  <option value="31">Small Dents in Nails</option>
<option value="32">Blister</option>
</select>
<select class="form-select form-select-lg mb-3" name="symptom5" onChange={handleChanges} value={symptoms.symptom5} aria-label=".form-select-lg example">
     
  <option selected>Select Five Symptoms</option>
  <option value="1">Itching</option>
  <option value="2">Skin Rash</option>
  <option value="3">Chiils</option>
  <option value="4">Vomiting </option>
  <option value="5">Cough</option>
  <option value="6">Fatigue</option>
  <option value="7">High Fever</option>
  <option value="8">Headache</option>
  <option value="9">Yellowish Skin</option>
  <option value="10">Nausea</option>
  <option value="11">Loss of Appetite</option>
  <option value="12">Back Pain</option>
  <option value="13">Abdominal Pain</option>
  <option value="14">Diarrhoea</option>
  <option value="15">Mild Fever</option>
  <option value="16">Yellowing of Eyes</option>
  <option value="17">Chest Pain</option>
  <option value="18">Fast Heart Rate</option>
  <option value="19">Pain During Bowel Movements</option>
  <option value="20">Neck Pain</option>
  <option value="21">Stiff Neck</option>
  <option value="22">Swelling Joints</option>
  <option value="23">Loss Of Balance</option>
  <option value="24">Continious Feel of Urine</option>
  <option value="25">Depression</option>
  <option value="26">Irritability</option>
  <option value="27">Muscle Pain</option>
  <option value="28">Abnormal Mensuration</option>
  <option value="29">Polyuria</option>
  <option value="30">Coma</option>
  <option value="31">Small Dents in Nails</option>
<option value="32">Blister</option>
</select><br/><br/>
<button type="button" class="btn btn-primary btn-block" onClick={submit}>submit</button>
      </div></div></div>




    )
}
export default Symptoms;