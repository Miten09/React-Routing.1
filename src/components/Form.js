import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { formActions } from "../slices/formslice";

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
  hobby: yup
    .mixed()
    .label("Object of Booleans")
    .test("at-least-one-true", "At least one selected", (obj) => {
      return Object.values(obj).some((value) => value);
    }),
  city: yup.string().oneOf(["Ahmedabad", "Surat", "Baroda"]),
  date: yup.string().required("Please Select Date"),
});

function Form(props) {
  const dispatch = useDispatch();

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
    hobby: [],
    cities: "",
    date: "",
  });

  function onSubmit(form) {
    //e.preventDefault();
    // props.data(form);
    console.log(form);
    dispatch(formActions.setForm(form));
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <input
          type="text"
          placeholder="Your Name"
          name="fullname"
          onChange={handleChange}
          {...register("fullname", { required: true })}
        />
        <p style={{ color: "red" }}>{errors.fullname?.message}</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          {...register("email", { required: true })}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          {...register("password", { required: true })}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <label>Gender :&nbsp;&nbsp;&nbsp; </label>
        <input
          type="radio"
          name="gender"
          for="inlineRadio1"
          value={"Male"}
          onChange={handleChange}
          {...register("gender", { required: true })}
        />
        <label class="form-check-label " for="inlineRadio1">
          Male
        </label>
        <input
          type="radio"
          name="gender"
          value={"Female"}
          onChange={handleChange}
          {...register("gender", { required: true })}
        />
        <label class="form-check-label" for="inlineRadio1">
          Female
        </label>
        <input
          type="radio"
          name="gender"
          value={"Others"}
          onChange={handleChange}
          {...register("gender", { required: true })}
        />
        Others
        <p style={{ color: "red" }}>{errors.gender?.message}</p>
        <label>Hobby :&nbsp;&nbsp;&nbsp; </label>
        <input
          type="checkbox"
          name="hobby"
          value={"Cricket"}
          onChange={handleChange}
          {...register("hobby", { required: true })}
        />
        <label class="form-check-label" for="inlineCheckbox1">
          Cricket
        </label>
        <input
          type="checkbox"
          name="hobby"
          value={"Football"}
          onChange={handleChange}
          {...register("hobby", { required: true })}
        />
        <label class="form-check-label" for="inlineCheckbox1">
          Football
        </label>
        <input
          type="checkbox"
          name="hobby"
          value={"Tennis"}
          onChange={handleChange}
          {...register("hobby", { required: true })}
        />
        <label class="form-check-label" for="inlineCheckbox1">
          Tennis
        </label>
        <br />
        <span style={{ color: "red" }}>{errors.hobby?.message}</span>
        <br />
        <label>Choose a City : </label>
        <select
          aria-label=".form-select-sm example"
          name="city"
          id="city"
          {...register("city", { required: true })}
        >
          <option selected>Open this select menu</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
          <option value="Baroda">Baroda</option>
        </select>
        <br />
        <p style={{ color: "red" }}>{errors.city?.message}</p>
        <label>Birthday : &nbsp;&nbsp;&nbsp;</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          {...register("date", { require: true })}
        />
        <p style={{ color: "red" }}>{errors.date?.message}</p>
        <button
          type="submit"
          className="btn btn-success mt-1"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
