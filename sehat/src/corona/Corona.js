import React from "react";
import './Corona.css'
import {useState} from "react"
import axios from "axios";
function Corona()
 {

    const [covid, setsym] = useState({
      age:"",
      gender:"",
      fever:"",
      drycough:"",
      sort:"",
      tired:"",
      nasalc:"",
      pain:"",
      runose:"",
      diah:""

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
     return(
            <div className="padding1">
              <div className="box">
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
      <input class="form-check-input ml-2" name="diah" onChange={change} value="1" type="checkbox" id="flexSwitchCheckDefault" />
    </div><br/>
    <button type="button" class="btn btn-primary btn-block" onClick={submit}>submit</button>
    </div>
    </div>    
                
              
                
            
        )
 }
 export default Corona;