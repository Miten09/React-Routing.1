import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Form from "./components/Form";
import FormDetails from "./components/FormDetails";
import Logo from "./components/Logo";
import { useState } from "react";
import MainHeader from "./components/MainHeader";

function App() {
  const [value, setvalue] = useState();

  function formdata(value) {
    console.log(value);
    setvalue(value);
  }
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Form data={formdata} />} />
          <Route
            path="/formdetails"
            element={<FormDetails Alldata={value} />}
          />
          <Route path="/logo" element={<Logo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;