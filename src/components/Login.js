import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Please Enter Your Name"),
  password: yup.string().required("Please enter Your Password"),
});

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  function onSubmit() {
    localStorage.setItem("login", true);
    navigate("/");
  }
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    } 
  });
  return (
    <>
    <h2 style={{textAlign:'center',color:'green'}}>Login Form</h2>
      <div className="container d-flex justify-content-center text-center mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="w-25">
          <input
            type="text"
            placeholder="Your Name"
            value={email}
            name="name"
            onChange={(e) => setemail(e.target.value)}
            {...register("name", { required: true })}
            className="form-control"
          />

          <p style={{ color: "red" }}>{errors.name?.message}</p>

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            className="form-control"
            onChange={(e) => setpassword(e.target.password)}
            {...register("password", { required: true })}
          />

          <p style={{ color: "red" }}>{errors.password?.message}</p>

          <button
            type="submit"
            className="btn btn-success mt-1"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
