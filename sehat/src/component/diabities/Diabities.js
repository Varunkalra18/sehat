import axios from "axios";
import React from "react";
import {useState} from "react"
import {useHistory} from "react-router"
import './Diabities.css'
function Diabites()
{
    const history = useHistory()
    const [diabData, setData] = useState({
        glucoseLevel:"",
        Insulin:"",
        Bmi:"",
        Age:""
    })
    const handleChange = (e)=>{
        const {name, value} = e.target
        setData({
            ...diabData,
            [name]:value
        })
    }
    const onc = ()=>{
        axios.post("http://127.0.0.1:5000/diabetes", diabData)
        .then((res)=>alert(res.data))
        
    }
   
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
                <ul className="navbar-brand ml-lg-auto">
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
            <div className="py-5 banner  " style={{backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/form-banners/banner2/banner-bg.jpg)'}}>
      <div className="tej">
        <div className="container p-5" style={{border:"solid red"}}> 
            <div className="form-group">
                <span>Glucose Level</span>
                <div className="p-3"><input type="text" name="glucoseLevel" onChange={handleChange} value={diabData.glucoseLevel} placeholder="Glucose Level"  /></div>    
            </div>           
            <div className="form-group">
                <span>Insulin</span>
                <div className="p-3"><input type="text" name="Insulin" onChange={handleChange} value={diabData.Insulin} placeholder="Insulin"  /></div>    
            </div>
            <div className="form-group">
                <span>BMI</span>
                <div className="p-3"><input type="text" name="Bmi" onChange={handleChange} value={diabData.Bmi} placeholder="BMI"  /></div>    
            </div>
            <div className="form-group">
                <span>Age</span>
                <div className="p-3"><input type="text" name="Age" onChange={handleChange} value={diabData.Age} placeholder="Age" /></div>    
            </div>
        
		

        <button type="submit" onClick={onc} className="btn btn-primary btn-block btn-large">Predict</button>
    
        </div></div></div></div>
    )
}
export default Diabites;