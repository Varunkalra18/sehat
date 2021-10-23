import React from 'react'
import Homepage from './component/homepage/Homepage'
import Login from './component/login/Login'
import Register from './component/register/Register'
import Appointment from './component/appointment/Appointment'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Homepage></Homepage></Route>
          <Route exact path="/appointment"><Appointment></Appointment></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/register"><Register></Register></Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
      {/* <Homepage></Homepage> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
