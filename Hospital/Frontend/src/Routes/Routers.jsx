import React from 'react';
import Home from "../pages/Home";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import Doctordetails from "../pages/Doctors/Doctordetails";
import MyAccount from '../Dashboard/User Account/MyAccount';
import CheckoutSuccess from '../pages/Doctors/CheckoutSuccess'
import {Routes, Route}  from "react-router-dom";
import Dashboard from '../Dashboard/Doctor Account/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Signup />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/doctors" element={<Doctors />}/>
      <Route path="/checkout-success" element={<CheckoutSuccess />}/>
      <Route path="/doctors/:id" element={<Doctordetails />}/>
      <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount /></ProtectedRoute> }/>
      <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard /></ProtectedRoute> }/>
    </Routes>
  )
}

export default Routers
