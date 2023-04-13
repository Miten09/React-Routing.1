import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./MainHeader.css";
import Logout from "./Logout";

function MainHeader() {
  return (
    <>
      <NavLink to="/formdetails" className="maindiv">
        <ul className="under">
          <li className="links">FormDetails</li>
        </ul>
      </NavLink>
      <NavLink to="/" className="maindiv">
        <ul className="under">
          <li className="links">Form</li>
        </ul>
      </NavLink>
      <NavLink to="/logo" className="maindiv">
        <ul className="under">
          <li className="links">Logo</li>
        </ul>
      </NavLink>

      <Logout />

      <Outlet />
    </>
  );
}

export default MainHeader;
