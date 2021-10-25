import React from 'react'
import Homepage from './component/homepage/Homepage'
import Login from './component/login/Login'
import Register from './component/register/Register'
import Appointment from './component/appointment/Appointment'
import Donation from './component/donation/Donation'
import './App.css';
import Disease from './component/disease/Disease'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Donationform from './component/donationform/Donationform'
import Services from './component/services/Services'
import Contact from './component/contact/Contact'

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
          <Route path="/donation"><Donation></Donation></Route>
          <Route path="/Services"><Services></Services></Route>
          <Route path="/Disease"><Disease></Disease></Route>
          <Route path="/Contact"><Contact></Contact></Route>
          <Redirect to="/"/>
        </Switch>
      </Router> }
    
    </div>
  );
}

export default App;
