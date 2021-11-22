import axios from "axios";
import React from "react";
import {useState} from "react"
import {useHistory} from "react-router"
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
        .then((res)=>alert("res", res.output))
        
    }
    return(
        <div className="container p-5"> 
            <div className="form-group">
                <label className="text-dark ">Glucose Level</label>
                <div className="p-3"><input type="text" name="glucoseLevel" onChange={handleChange} value={diabData.glucoseLevel} placeholder="Glucose Level"  /></div>    
            </div>           
            <div className="form-group">
                <label className="text-dark ">Insulin</label>
                <div className="p-3"><input type="text" name="Insulin" onChange={handleChange} value={diabData.Insulin} placeholder="Insulin"  /></div>    
            </div>
            <div className="form-group">
                <label className="text-dark ">BMI</label>
                <div className="p-3"><input type="text" name="Bmi" onChange={handleChange} value={diabData.Bmi} placeholder="BMI"  /></div>    
            </div>
            <div className="form-group">
                <label className="text-dark ">Age</label>
                <div className="p-3"><input type="text" name="Age" onChange={handleChange} value={diabData.Age} placeholder="Age" /></div>    
            </div>
        
		

        <button type="submit" onClick={onc} className="btn btn-primary btn-block btn-large">Predict</button>
    
        </div>
    )
}
export default Diabites;