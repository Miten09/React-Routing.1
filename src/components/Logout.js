import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("login");
    navigate("/login");
  }

  return (
    <>
      <ul className="under">
        <li  className="maindiv">
          <div onClick={handleClick} className="navlink">
            Logout
          </div>
        </li>
      </ul>
    </>
  );
}

export default Logout;
