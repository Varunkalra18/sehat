import React from 'react'
import axios from 'axios'
import {useHistory} from "react-router"
function List(props) {

    const history = useHistory()
    const { _id,regEmail, name, email, doctor, date,time} = props.us
    const deleteData = () =>{
        const userStr  = localStorage.getItem("user")
        if (!userStr){
            alert("Please Login first")
          }
          else{
              console.log("We are in delete")
            const user = JSON.parse(userStr) ;
            //console.log(user)
            let tokens = user.token ;
            let toc = `Bearer ${tokens}`
            console.log("_id", _id)
            axios.post("http://localhost:9002/deleteappointment",{_id:_id},{    
                headers : {"Authorization" :toc}
            })
            .then((res)=>{
                alert(res.data)
                window.location.href = "/Appointview"
            })
        }
        return 
    }
    
    return (
        <div className="row pt-5 border">
                 <div className="col-2">{regEmail}</div>
                 <div className="col-2">{name}</div>
                 <div className="col-2">{email}</div>
                 <div className="col-1">{doctor}</div>
                 <div className="col-1">{date}</div>
                 <div className="col-1">{time}</div>
                 <div className="col-3"><button className="btn btn-danger" onClick={deleteData}>Mark As Completed</button>
                 </div>
                 </div>
    )    
}

export default List
