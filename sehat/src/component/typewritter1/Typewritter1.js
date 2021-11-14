import React from "react";
 
import Typewriter from "typewriter-effect";

import '../css/style.css'
function Typewriter1()
{
    
    return(
        <div className="slider">
        <div className="callbacks_container">
          <ul className="rslides callbacks callbacks1" id="slider4">
              <div className="banner-top3">
                <div className="banner-info_agile_w3ls">
                 
                  <div className="typwriter">
         
         <Typewriter
     
          onInit={(typewriter)=> {
     
          typewriter
           
          .typeString("The Health care system of the future, today" )
            
          .pauseFor(100)
          .deleteAll()
          .typeString("Sehat a health care system where you can find disease prediction as well as contribute to society ")
          .start();
          }}
          />
       </div>
                 
                </div>
              </div>
          </ul>
        </div>
      </div>
    )
}

export default Typewriter1;