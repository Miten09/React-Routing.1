import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Form(props) {
  const [form, setform] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    hobby: "",
    cities: "",
    date: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="fullname"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Gender : </label>
        <input type="radio" name="gender" onChange={handleChange} />
        Male
        <input type="radio" name="gender" onChange={handleChange} />
        Female
        <input type="radio" name="gender" onChange={handleChange} />
        Others
        <br />
        <br />
        <label>Hobby: </label>
        <input type="checkbox" name="hobby" onChange={handleChange} />
        Cricket
        <input type="checkbox" name="hobby" onChange={handleChange} />
        Football
        <input type="checkbox" name="hobby" onChange={handleChange} />
        Tennis
        <br />
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
        <input type="date" name="date" onChange={handleChange} />
        <br />
        <br />
        <NavLink to="/formdetails">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </NavLink>
      </form>
    </>
  );
}

export default Form;
