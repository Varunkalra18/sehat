import React from "react";
import './Corona.css'
 function Corona()
 {
     return(
         <div>
        <form>
            <div className="conatiner">
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
    </div>
  </div>
  <fieldset class="form-group">
  
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
          <h5 class="form-check-label" for="gridRadios1">
          <div className="padding1">
            First radio</div>
          </h5>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
          <h5 class="form-check-label" for="gridRadios2">
            Second radio
          </h5>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
          <h5 class="form-check-label" for="gridRadios3">
            Third  radio
          </h5>
        </div>
      </div>
   
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" />
        <h5 class="form-check-label" for="gridCheck1">
          Example checkbox
        </h5>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div></div>
</form>
    </div>      
            
          
             
         
     )
 }
 export default Corona;