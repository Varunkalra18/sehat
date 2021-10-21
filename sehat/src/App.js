import React from 'react'
import Homepage from './component/homepage/Homepage'
import Login from './component/login/Login'
import Register from './component/register/Register'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Homepage></Homepage></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/register"><Register></Register></Route>
        </Switch>
      </Router>
      {/* <Homepage></Homepage> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
