import React from "react";

function Diabites()
{
    return(
        <div>
           <form action="{{ url_for('predict')}}"method="post">
        <input type="text" name="Glucose Level" placeholder="Glucose Level" required="required" />
    	<input type="text" name="Insulin" placeholder="Insulin" required="required" />
        <input type="text" name="BMI" placeholder="BMI" required="required" />
        <input type="text" name="Age" placeholder="Age" required="required" />
		

        <button type="submit" class="btn btn-primary btn-block btn-large">Predict</button>
    </form>
        </div>
    )
}
export default Diabites;