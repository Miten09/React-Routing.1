import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MainHeader from "./MainHeader";

const schema = yup.object({
  name: yup.string().required("Please Enter Your Name"),
  password: yup.string().required("Please enter Your Password"),
});

function Login() {
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
    console.log("hi");
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Name"
          value={email}
          name="name"
          onChange={(e) => setemail(e.target.value)}
          {...register("name", { required: true })}
        />
        <br />
        <span style={{ color: "red" }}>{errors.name?.message}</span>
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.password)}
          {...register("password", { required: true })}
        />
        <br />
        <span style={{ color: "red" }}>{errors.password?.message}</span>
        <br />
        <NavLink to="/">
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
        </NavLink>
      </form>
    </>
  );
}

export default Login;
