import React, { Component } from 'react'
import axios from 'axios'
import {useHistory} from "react-router-dom"
import List from "./List"
class AppoinView extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            isLoading:false,
            isError:false
        }
    }
    async componentDidMount(){

        this.setState({isLoading:true})
        const userStr  = localStorage.getItem("user")
        if (!userStr){
            alert("Please Login first")
          }
          else{
            const user = JSON.parse(userStr) ;
            console.log(user)
            let tokens = user.token ;
            let toc = `Bearer ${tokens}`
            axios.get("http://localhost:9002/viewappointment",{    
                headers : {"Authorization" :toc}
            })
            .then((res)=>{
                console.log(res.data)
                if(res.data.code)
                {
                    return alert("No Appointment Found")
                    
                }
                this.setState({users:res.data,isLoading:false})
            })
        }
    }
    renderData = () => {
        return (this.state.users.map((useg)=>{
            console.log(useg)
             return <List us = {useg}/>
        }))
    }
    render() {
        const {users, isLoading, isError} = this.state
        if(isLoading)
        {
            return <div>Loading.....</div>
        }
        if(isError)
        {
            return <div>No Appintments</div>
        }
        if(users)
        {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">Registered Email</div>
                        <div className="col-2">Patient</div>
                        <div className="col-2">Email</div>
                        <div className="col-1">Doctor</div>
                        <div className="col-1">Date</div>
                        <div className="col-1">Time Slot</div>
                    </div>
                    {this.renderData()}
                </div>
            ) 
        }
        else{
            return "Varun"
        }
    }
}

export default AppoinView
