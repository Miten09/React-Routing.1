import React, { useState } from "react";

function Form(props) {
  const [fullname, setfullname] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.data(fullname);
    console.log(fullname);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="fullname"
          onChange={(e) => setfullname(e.target.value)}
        />
        <br />
        <br />
        <input type="email" placeholder="email" />
        <br />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <br />
        <input type="date" placeholder="date" />
        <br />
        <br />
        <input type="number" placeholder="number" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;