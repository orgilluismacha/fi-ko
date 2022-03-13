import React from "react";
import { NavLink } from "react-router-dom";

const SideNavBar = () =>(
  <div className="side-nav-bar">
    <NavLink 
      to="/"       
      className={({ isActive }) => (isActive ? 'is-active' : 'is-inactive')}>Dashboard</NavLink>
    <NavLink 
      to="/create" 
      className={({ isActive }) => (isActive ? 'is-active' : 'is-inactive')}>Add expense</NavLink>
    <NavLink 
      to="/help"   
      className={({ isActive }) => (isActive ? 'is-active' : 'is-inactive')}>Need help?</NavLink>
  </div>
);

export default SideNavBar;