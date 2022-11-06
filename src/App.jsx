import React from "react";

import { Routes, Route, Link, Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Login from "./pages/LoginForm";
import User from "./components/User";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <useAppContext>
      <ErrorBoundary>
       <div className="navbar"><Navbar/></div> 
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile/Login" element={<Profile/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </ErrorBoundary>
      </useAppContext>
    </div>
  );
}

export default App;
