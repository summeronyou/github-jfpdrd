import React from 'react';
import './NavStyle.css';
import { NavLink } from 'react-router-dom';

function MainNavigate() {
  return (
    <nav className="Nav">
      <NavLink className="Nav__Menu" to="/">
        Login
      </NavLink>

      <NavLink className="Nav__Menu" to="/dashboard">
        Dashboard
      </NavLink>
    </nav>
  );
}

export default MainNavigate;
