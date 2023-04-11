import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function MainHeader() {
  return (
    <>
      <NavLink to="/formdetails">FormDetails</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/">Form</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/logo">Logo</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
      <Outlet />
    </>
  );
}

export default MainHeader;
