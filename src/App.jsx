import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    passwordError: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let globalError = false;

    setErrors({
      firstNameError: !inputValues.firstName,
      lastNameError: !inputValues.lastName,
      emailError: !regex.test(inputValues.email),
      passwordError: !inputValues.password,
    });

    globalError =
      !inputValues.firstName ||
      !inputValues.lastName ||
      !regex.test(inputValues.email) ||
      !inputValues.password;

    if (!globalError) {
      setInputValues({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [`${name}Error`]: false,
    }));

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <div className="bg-[#FF7979] min-h-[100%] xl:min-h-[100vh] bg-image text-center bg-bg-mobile xl:bg-bg-desktop pt-[88px] px-[24px] pb-[68px] xl:flex">
      <Header />
      <MainContent
        inputValues={inputValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
}

export default App;
