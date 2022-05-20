import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const SideNavBar = ({ startLogout }) => (
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
    <button onClick={startLogout} >Logout</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(SideNavBar);