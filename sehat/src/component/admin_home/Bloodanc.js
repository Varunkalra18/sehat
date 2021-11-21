import React from 'react'
import {useHistory} from "react-router"
import {useState} from "react"
import axios from "axios"

function Bloodanc() {
    const history = useHistory()
    const [reqs, setReq] = useState({
        bloodG:""
    })
    console.log(reqs)
    const handleChange = (e) => {
        const {name,value} = e.target ;
        
        // console.log(name,value)
        setReq({
            ...reqs,
            [name]: value
        })
    }
    const submit = ()=>{
        axios.post("http://localhost:9002/sendAnnouncement", reqs)
        .then((res)=>{
          alert(res.data)
        })
    }
    return (
        <div>
            <div className="container bg-primary" >
                <div className="card bg-dark">
                    <div className="card-header">
                        Enter Blood Group
                    </div>
                    <div className="card-body">
                        <input type="text" name="bloodG" value={reqs.bloodG} onChange={handleChange}></input>
                    </div>
                    <div className="card-footer">
                        <button class="btn btn-primary" onClick={submit}>Send Mails</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bloodanc
