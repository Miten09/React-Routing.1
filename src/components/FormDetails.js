import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import FormSlice from "../store/slices/formslice";

function FormDetails() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  const select = useSelector((state) => state.user.form);
  console.log(select);
  return (
    <>
      {select.map((value) => {
        return (
          <div key={"key"}>
            <p>{value.fullname}</p>
            <p>{value.email}</p>
            <p>{value.password}</p>
            <p>{value.gender}</p>
            <p>{value.hobby}</p>
            <p>{value.city}</p>
            <p>{value.date}</p>
          </div>
        );
      })}
      <br />
      <br />
      {/* <p>{select.fullname}</p>
      <p>{select.email}</p> */}

      <button
        onClick={handleClick}
        style={{ marginTop: "100px", marginRight: "150px" }}
        className="btn btn-success mt-10"
      >
        Go to Form Page
      </button>
    </>
  );
}

export default FormDetails;
