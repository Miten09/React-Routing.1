import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import FormSlice from "../slices/formslice";

function FormDetails() {
  const select = useSelector((state) => state.user.formslice);
  console.log(select);
  return (
    <>
      {/* {Alldata.map((value) => {
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
      <br /> */}
      {/* <p>{select}</p> */}

      {select.map((value) => {
        return (
          <>
            <p>{value.fullname}</p>
            <p>{value.email}</p>
          </>
        );
      })}

      <NavLink to="/">
        <button>Go to Form Page</button>
      </NavLink>
    </>
  );
}

export default FormDetails;
