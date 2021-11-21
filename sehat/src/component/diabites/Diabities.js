import React from "react";

import './Diabities.css'
function Diabites()
{
    return(
        <div className="shift">
            <div className="box">
           <form action="{{ url_for('predict')}}"method="post">
               <span>Diabites Prediction form</span>
           <div class="form-group">
      
      <input type="text" class="form-control" id="usr"placeholder="Glucose Level:" />
    </div>
    <div class="form-group">
     
      <input type="text" class="form-control" id="usr" placeholder="Insulin:" />
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="usr" placeholder="BMI:"/>
    </div>
    <div class="form-group">
      <span>Age:</span>
      <input type="number" class="form-control" id="usr" />
    </div>
        <button type="submit" class="btn btn-primary btn-block btn-large">Predict</button>
   </form>
      </div>  </div>
    )
}
export default Diabites;