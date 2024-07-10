import React from "react";
import Form from "./Form";

const MainContent = ({
  inputValues,
  handleChange,
  handleSubmit,
  errors,
}) => {
  return (
    <div className="flex flex-col items-center">
      <button className="w-[327px] xl:w-[540px] h-[88px] xl:h-[60px] bg-[#5E54A4] rounded-[10px] py-[18px] px-[66px] shadow-3xl mb-[24px] text-[#fff] text-[15px] font-bold leading-[26px] tracking-[0.268px]">
        Try it free 7 days{" "}
        <span className="font-[300]">then $20/mo. thereafter</span>
      </button>
      <div className="w-[327px] xl:w-[540px] bg-[#fff] py-[24px] px-[24px] xl:py-[40px] xl:px-[40px] rounded-[10px]">
        <Form
          inputValues={inputValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
        <p className="text-[11px] text-[#BAB7D4] font-medium leading-[21px]">
          By clicking the button, you are agreeing to our{" "}
          <span
            style={{ cursor: "pointer" }}
            className="text-[#FF7979] text-[11px]font-bold leading-[21px]"
          >
            Terms and Services
          </span>
        </p>
      </div>
    </div>
  );
};

export default MainContent;
