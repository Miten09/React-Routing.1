import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullname: yup.string().required("Name is Required"),
  email: yup.string().email().required("Email is Required"),
  password: yup
    .string()
    .required("Password is Required")
    .min(4)
    .max(10)
    .matches(RegExp("(.*[a-z].*)"), "Lowercase")
    .matches(RegExp("(.*[A-Z].*)"), "Uppercase")
    .matches(RegExp("(.*\\d.*)"), "Number")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Special"),
  gender: yup.string().required(),
  //hobby: yup.number().required(),
  //cities: yup.string().required(),
  date: yup.string().required("Please Select Date"),
});

function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [form, setform] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    hobby: "",
    cities: "",
    date: "",
  });

  function onSubmit(form) {
    //e.preventDefault();
    props.data(form);
    console.log(form);
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setform({
      ...form,
      [name]: value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="name"
          name="fullname"
          onChange={handleChange}
          {...register("fullname", { required: true })}
        />
        <span style={{ color: "red" }}>{errors.fullname?.message}</span>
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          {...register("email", { required: true })}
        />
        <span style={{ color: "red" }}>{errors.email?.message}</span>
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          {...register("password", { required: true })}
        />
        <span style={{ color: "red" }}>{errors.password?.message}</span>
        <br />
        <br />
        <label>Gender : </label>
        <input
          type="radio"
          name="gender"
          value={"Male"}
          onChange={handleChange}
          {...register("gender", { required: true })}
        />
        Male
        <input
          type="radio"
          name="gender"
          value={"Female"}
          onChange={handleChange}
          {...register("gender", { required: true })}
        />
        Female
        <input
          type="radio"
          name="gender"
          value={"Others"}
          onChange={handleChange}
          {...register("gender", { required: true })}
        />
        Others
        <br /> <span style={{ color: "red" }}>{errors.gender?.message}</span>
        <br />
        <label>Hobby: </label>
        <input
          type="checkbox"
          name="hobby"
          value={"Cricket"}
          onChange={handleChange}
        />
        Cricket
        <input
          type="checkbox"
          name="hobby"
          value={"Football"}
          onChange={handleChange}
          {...register("hobby", { required: true })}
        />
        Football
        <input
          type="checkbox"
          name="hobby"
          value={"Tennis"}
          onChange={handleChange}
          {...register("hobby", { required: true })}
        />
        Tennis
        <br />
        <span style={{ color: "red" }}>{errors.hobby?.message}</span>
        <br />
        <label>Choose a City : </label>
        <select name="cities">
          <option value={"Ahmedabad"} onChange={handleChange}>
            Ahmedabad
          </option>
          <option value={"Surat"} onChange={handleChange}>
            Surat
          </option>
          <option value={"Baroda"} onChange={handleChange}>
            Baroda
          </option>
          <option value={"Rajkot"} onChange={handleChange}>
            Rajkot
          </option>
        </select>
        <br />
        <br />
        <label>Birthday : </label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          {...register("date", { require: true })}
        />
        <br />
        <span style={{ color: "red" }}>{errors.date?.message}</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
