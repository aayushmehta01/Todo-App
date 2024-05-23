import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import Login from "./components/pages/Login";
import Register from './components/pages/Register';
import ForgotPassword from './authentication/forgotPassword';
import {auth} from './authentication/firebase';
import { ToastContainer } from 'react-toastify';

function App(){

  const [user, setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user);
    });
  });

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={user?<Navigate to="/home" />:<Landing />} />
          <Route path="home" element={ <Home/> } />
          <Route path="login" element={ <Login /> } />
          <Route path="register" element={ <Register /> } />
          <Route path="reset" element={ <ForgotPassword /> } />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;