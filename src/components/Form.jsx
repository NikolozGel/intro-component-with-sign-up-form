import React from "react";
import InputField from "./InputField";

const Form = ({
  inputValues,
  handleChange,
  handleSubmit,
  errors,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          name="firstName"
          type="text"
          placeholder="First Name"
          value={inputValues.firstName}
          onChange={handleChange}
          error={errors.firstNameError}
        />
        <InputField
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={inputValues.lastName}
          onChange={handleChange}
          error={errors.lastNameError}
        />
        <InputField
          name="email"
          type="text"
          placeholder="Email Address"
          value={inputValues.email}
          onChange={handleChange}
          error={errors.emailError}
        />
        <InputField
          name="password"
          type="password"
          placeholder="Password"
          value={inputValues.password}
          onChange={handleChange}
          error={errors.passwordError}
        />
        <button
          type="submit"
          className="shadow-2xl w-[279px] xl:w-[460px] h-[56px] bg-[#38CC8B] rounded-[5px] text-[#fff] text-[15px] font-semibold leading-[26px] tracking-[1px] mb-[8px] xl:mb-[18px] mt-[19px]"
        >
          CLAIM YOUR FREE TRIAL
        </button>
      </form>
    </>
  );
};

export default Form;
