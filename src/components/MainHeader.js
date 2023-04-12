import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./MainHeader.css";

function MainHeader() {
  return (
    <div className="maindiv">
      <NavLink to="/formdetails" className="navlink">
        <ul className="under">
          <li className="links">FormDetails</li>
        </ul>
      </NavLink>
      <NavLink to="/" className="navlink">
        <ul className="under">
          <li className="links">Form</li>
        </ul>
      </NavLink>
      <NavLink to="/logo" className="navlink">
        <ul className="under">
          <li className="links">Logo</li>
        </ul>
      </NavLink>
      <NavLink to="/login" className="navlink">
        <ul className="under">
          <li className="links">Logout</li>
        </ul>
      </NavLink>
      <Outlet />
    </div>
  );
}

export default MainHeader;
