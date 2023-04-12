import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './pages/forms/login/Login';
import Signupform from "./pages/forms/signup/signupforms"
function App() {


  
  return (
  <Router>
    <Routes>
        <Route path='/signup' Component={Signupform}></Route>
        <Route path='/login' Component={Login}></Route>  
    </Routes>
  </Router>
  );
}

export default App;
