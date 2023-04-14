import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./MainHeader.css";
import Logout from "./Logout";

const headers = [
  {
    to: "/formdetails",
    text: "FormDetails",
  },
  {
    to: "/",
    text: "Form",
  },
  {
    to: "/logo",
    text: "Logo",
  },
];
function MainHeader() {
  return (
    <>
      {headers.map((value) => {
        return (
          <>
            <NavLink to={value.to} className="maindiv">
              <ul className="under">
                <li className="links">{value.text}</li>
              </ul>
            </NavLink>
          </>
        );
      })}

      <Logout />

      <Outlet />
    </>
  );
}

export default MainHeader;
