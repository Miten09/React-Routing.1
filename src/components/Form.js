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
    dispatch(
      formActions.setForm(form)
    );
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
      <div className="container d-flex justify-content-center mt-5 pl-10 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your Name"
            name="fullname"
            onChange={handleChange}
            {...register("fullname", { required: true })}
            className="form-control"
          />
          <p style={{ color: "red" }}>{errors.fullname?.message}</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            {...register("email", { required: true })}
            className="form-control"
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            {...register("password", { required: true })}
            className="form-control"
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
          <label>Gender :&nbsp;&nbsp;&nbsp; </label>
          <div class="form-check form-check-inline pl-5">
            <input
              type="radio"
              name="gender"
              for="inlineRadio1"
              value={"Male"}
              className="form-check-input"
              onChange={handleChange}
              {...register("gender", { required: true })}
            />
            <label class="form-check-label " for="inlineRadio1">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline ">
            <input
              type="radio"
              name="gender"
              value={"Female"}
              onChange={handleChange}
              className="form-check-input"
              {...register("gender", { required: true })}
            />
            <label class="form-check-label" for="inlineRadio1">
              Female
            </label>
          </div>
          <div class="form-check form-check-inline ">
            <input
              type="radio"
              name="gender"
              value={"Others"}
              className="form-check-input"
              onChange={handleChange}
              {...register("gender", { required: true })}
            />
            Others
          </div>
          <p style={{ color: "red" }}>{errors.gender?.message}</p>
          <label>Hobby :&nbsp;&nbsp;&nbsp; </label>
          <div class="form-check form-check-inline">
            <input
              type="checkbox"
              name="hobby"
              value={"Cricket"}
              className="form-check-input"
              onChange={handleChange}
              {...register("hobby", { required: true })}
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Cricket
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              type="checkbox"
              name="hobby"
              value={"Football"}
              className="form-check-input"
              onChange={handleChange}
              {...register("hobby", { required: true })}
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Football
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              type="checkbox"
              name="hobby"
              value={"Tennis"}
              onChange={handleChange}
              className="form-check-input"
              {...register("hobby", { required: true })}
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Tennis
            </label>
          </div>
          <br />
          <span style={{ color: "red" }}>{errors.hobby?.message}</span>
          <br />
          <label>Choose a City : </label>
          <select
            class="form-select form-select-sm pr-1"
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
      </div>
    </>
  );
}

export default Form;
