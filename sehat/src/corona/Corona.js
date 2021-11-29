import React from "react";
import './Corona.css'
import {useState} from "react"
import axios from "axios";
import {useHistory} from "react-router"
function Corona()
 {

    const [covid, setsym] = useState({
      age:"0",
      gender:"",
      fever:"0",
      drycough:"0",
      db:"0",
      sort:"0",
      tired:"0",
      nasalc:"0",
      pain:"0",
      runose:"0",
      diah:"0"

    })

    console.log(covid)
    const change = (e)=>{
      const {name,value} = e.target
      setsym({
        ...covid,
        [name]:value
      })
    }
    const submit = ()=>{
      axios.post("http://127.0.0.1:5000/corona",covid)
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
                  
            </nav>
        
      </div></div>


       <div className="py-5 banner p1" style={{backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/form-banners/banner2/banner-bg.jpg)'}}>
            <div className="padding1">
              <div className="box" style={{border:"solid brown"}}>
                <div className="row g-3">
                <div className="col">
                <label for="validationDefault01" class="form-label">Age</label>
                    <input type="number" name ="age" class="form-control" onChange={change} value={covid.age} placeholder="Age" aria-label="Age" />
                    </div>
      <div className="col">
      <label for="validationDefault04" class="form-label">Gender</label>
        <select class="form-select" name="gender" onChange={change} value={covid.gender} id="validationDefault04" required>
          <option selected disabled value="">Choose...</option>
          <option>Male</option>
          <option>Female</option>
          <option>Transgender</option>
        </select>
      </div></div><br/><br/>
      <span>**Please select the suitable symptoms by turinng on the checkboxes**  </span>
                <div class="form-check form-switch">
      <input class="form-check-input ml-2  " type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label mt-1 " for="flexSwitchCheckDefault">Fever</label>
      <input class="form-check-input ml-2" name="fever" onChange={change} value="1" type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label" for="flexSwitchCheckDefault">Dry-Cough</label>
      <input class="form-check-input ml-2" name="drycough"  onChange={change} value="1"type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label" for="flexSwitchCheckDefault">Difficulty-in-Brething</label>
      <input class="form-check-input ml-2" name="db" onChange={change} value="1" type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label" for="flexSwitchCheckDefault">Sore-Throat</label><br/>
      <input class="form-check-input ml-2" name="sort" onChange={change} value="1" type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label mt-1" for="flexSwitchCheckDefault">Tiredness</label>
      <input class="form-check-input ml-2" name="tired" onChange={change} value="1" type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label" for="flexSwitchCheckDefault">Nasal-Congestion</label>
      <input class="form-check-input ml-2" name="nasalc" onChange={change} value="1" type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label" for="flexSwitchCheckDefault">Pains</label><br/>
      <input class="form-check-input ml-2" name="pain" onChange={change} value="1" type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label mt-1" name=""for="flexSwitchCheckDefault">Runny-Nose</label>
      <input class="form-check-input ml-2" name="runose" onChange={change} value="1" type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label" for="flexSwitchCheckDefault">Diarrhea</label>
    </div><br/>
    <button type="button" class="btn btn-primary btn-lg" onClick={submit}>submit</button>
    </div>
    </div> </div>   </div>
                
              
                
            
        )
 }
 export default Corona;