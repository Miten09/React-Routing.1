import React from "react";
import { NavLink } from "react-router-dom";

function FormDetails({ Alldata }) {
  console.log(Alldata);
  return (
    <>
      {Alldata.map((value) => {
        return (
          <div key={'key'}>
            <p>{value.fullname}</p>
            <p>{value.email}</p>
            <p>{value.password}</p>
            <p>{value.gender}</p>
            <p>{value.hobbies}</p>
            <p>{value.cities}</p>
            <p>{value.date}</p>
          </div>
        );
      })}
      <br />
      <br />
      <NavLink to="/">
        <button>Go to Form Page</button>
      </NavLink>
    </>
  );
}

export default FormDetails;
