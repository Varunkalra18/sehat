import React from 'react'
import Homepage from './component/homepage/Homepage'
import Login from './component/login/Login'
import Register from './component/register/Register'
import Appointment from './component/appointment/Appointment'
import Donation from './component/donation/Donation'
import './App.css';
import axios from 'axios';
import Disease from './component/disease/Disease'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Bloodanc from "./component/admin_home/Bloodanc"
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import View from "./component/admin_view/View"
import Donationform from './component/donationform/Donationform'
import Services from './component/services/Services'
import Contact from './component/contact/Contact'
import Admin_shedule from './component/admin_shedule/Admin_shedule'
import Admin_search from './component/admin_search/Admin_search'
import Admin_home from './component/admin_home/Admin_home'
import Admin_login from './component/admin_login/Admin_login'
import View_appointment from './component/view_appointment/View_appointment'
import Symptoms from './component/symptoms/Symtoms'
import Diabities from './component/diabities/Diabities'
import Corona from './corona/Corona'
import List from "./component/admin_view/List"
import AppoinView from "./component/admin_view/AppoinView"
import Forgot from './component/forgot/Forgot'
import Reset from './component/reset/Reset'

function App() {
  return (
    <div className="App">
      {<Router>
        <Switch>
          <Route exact path="/"><Homepage></Homepage></Route>
           <Route path="/appointment"><Appointment></Appointment></Route>
           <Route path="/donationform"><Donationform></Donationform></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/register"><Register></Register></Route>
          <Route path="/donate"><Donation></Donation></Route>
          <Route path="/Services"><Services></Services></Route>
          <Route path="/Disease"><Disease></Disease></Route>
          <Route path="/Contact"><Contact></Contact></Route>
          <Route path="/admin_shedule"><Admin_shedule></Admin_shedule></Route>
          <Route path="/admin_search"><Admin_search></Admin_search></Route>
          <Route path="/admin_home"><Admin_home></Admin_home></Route>
          <Route path="/admin_login"><Admin_login></Admin_login></Route>
          <Route path="/view"><View/></Route>
          <Route path="/Appointview"><AppoinView/></Route>
          <Route path="/list"><List/></Route>
          <Route path="/view_appointment"><View_appointment></View_appointment></Route>
          <Route path="/symptoms"><Symptoms></Symptoms></Route>
           <Route path="/diabities"><Diabities></Diabities></Route>
           <Route path="/corona"><Corona></Corona></Route>
           <Route path="/Bloodanc"><Bloodanc></Bloodanc></Route>
           <Route path="/forgot"><Forgot></Forgot></Route>
           <Route path="/reset"><Reset></Reset></Route>
          <Redirect to="/"/>
        </Switch>
      </Router> }
    
    </div>
  );
}

export default App;
