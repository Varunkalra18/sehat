import React from "react";
import './Corona.css'
 function Corona()
 {
     return(
         <div className="padding1">
           <div className="box">
             <div className="row g-3">
             <div className="col">
             <label for="validationDefault01" class="form-label">Age</label>
    <input type="number" class="form-control" placeholder="Age" aria-label="Age" />
 
  </div>
  <div className="col">
  <label for="validationDefault04" class="form-label">Gender</label>
    <select class="form-select" id="validationDefault04" required>
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
  <input class="form-check-input ml-2" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Dry-Cough</label>
  <input class="form-check-input ml-2" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Difficulty-in-Brething</label>
  <input class="form-check-input ml-2" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Sore-Throat</label><br/>
  <input class="form-check-input ml-2" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label mt-1" for="flexSwitchCheckDefault">Tiredness</label>
  <input class="form-check-input ml-2" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Nasal-Congestion</label>
  <input class="form-check-input ml-2" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Pains</label><br/>
  <input class="form-check-input ml-2" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label mt-1" for="flexSwitchCheckDefault">Runny-Nose</label>
  <input class="form-check-input ml-2" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Diarrhea</label>
</div><br/>
<button type="button" class="btn btn-primary btn-block">submit</button>
</div>
</div>    
            
          
             
         
     )
 }
 export default Corona;