import React, { useEffect } from "react";
import { Route, Redirect, useNavigate } from "react-router-dom";
import Login from "./Login";

const ProtectedRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
    let login = localStorage.getItem("login");
    if (!login) {
      return <Login />
    }
  
  return (
    <div>
      {console.log("VNK IN RESTURN ")}
      <Component />
    </div>
  );
};

export default ProtectedRoutes;
