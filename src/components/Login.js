import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar.js";

function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  function handlesubmit() {
    // e.preventDefault();
    if (email === "miten@123" && password === "mit@123") {
    }
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setpassword(e.target.password)}
        />
        <br />
        <br />
        <NavLink to="/">
          <button type="submit" onClick={handlesubmit}>
            Submit
          </button>
        </NavLink>
      </form>
    </>
  );
}

export default Login;
