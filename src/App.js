import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Login from "./components/Login";

import './App.css';

function App() {
  const [ userData, setUserData ] = useState()
  console.log(userData)
  return (
    <div>
      <Route exact path="/user/login" render={props => <Login {...props} setUserData={setUserData} />} />

    </div>
  );
}

export default App;
