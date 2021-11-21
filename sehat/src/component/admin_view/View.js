import React from "react";
import b3 from '../images/b3.png'
import {useHistory} from "react-router"
import axios from "axios";
import {useState} from "react"
import List from "./List"

function View()
 {
  const [appointed, addAppoint] = useState([
    
  ])
  let ap = [] ;
  const his = ()=>{
    axios.get("http://localhost:9002/viewappointment")
  .then((res)=>{
      if(res.data.code == 404)
      {
          alert("No Appointment Today")
      }
      else{
           
          //return(<List data = {res.data}/>)
          var count = 0 ;
          res.data.map((uses)=>{
            ap += uses
          })
          console.log(ap)
          addAppoint({
            ...appointed,
            ap
          })
      }
  })
  //console.log("aaa",appointed[1])
  return ;
  }
//his()
    const history = useHistory()
    const book = () => {
        history.push("/admin_shedule")
    }

     return(
        <div className="row why-choose-agile-grids-top">
            <div className="col-lg-4 agileits-w3layouts-grid">
            <div className="row wthree_agile_us pt-5">
                  <div className="col-3 agile-why-text p-0 text-right">
                    <div className="wthree_features_grid">
                      <i className="fas fa-user-md" />
                    </div>
                  </div>
                  <div className="col-9 agile-why-text-2" onClick={book}>
                    <h4 className="text-dark font-weight-bold mb-3"><div className="Click">
                        Appoint Doctor</div></h4>
                    <p>Take appointment from the doctor</p>
                  </div>
                </div>
                <div className="row wthree_agile_us my-5">
                  <div className="col-3 agile-why-text p-0 text-right">
                    <div className="wthree_features_grid">
                      <i className="fas fa-syringe" />
                    </div>
                  </div>
                  <div className="col-9 agile-why-text-2" >
                    <h4 className="text-dark font-weight-bold mb-3">
                    <h4 className="text-dark font-weight-bold mb-3">View Pending Appointment</h4></h4>
                    
                  </div>
                </div>
               </div>
            <div className="col-lg-4 agileits-w3layouts-grid img text-center spacing">
                <img src={b3} alt=" " className="img-fluid" />
              </div>
              <hr/>
              <button class="btn btn-success" onClick= {his}>Show</button>
              {appointed.map((use)=>{
                return(<div><List useg = {use}/></div>)
              })}
              
              
            
            </div>

     )
 }
 export default View;