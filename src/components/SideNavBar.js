import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const SideNavBar = ({ startLogout }) => (
  <div className="header">
    <div className="content-container">
      <div className="header__content">
        <Link
          className="header__title"
          to="/dashboard"
        ><h1>fi-ko</h1></Link>
        <NavLink
          to="/help"
          className={({ isActive }) => (isActive ? 'is-active' : 'is-inactive')}>Need help?</NavLink>

        <button className="button button--link" onClick={startLogout} >Logout</button>
      </div>

    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(SideNavBar);