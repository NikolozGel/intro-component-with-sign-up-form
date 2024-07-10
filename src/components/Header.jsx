import React from "react";

const Header = () => {
  return (
    <div className="xl:pt-[202px] xl:ml-[141px] xl:mr-[45px]">
      <div className="xl:w-[525px] xl:text-start">
        <h1 className="text-[#fff] text-[28px] xl:text-[50px] font-bold leading-[36px] xl:leading-[55px] tracking-[-0.292px] xl:tracking-[-0.521px] mb-[16px]">
          Learn to code by watching others
        </h1>
        <p className="text-[#fff] font-medium leading-[26px] mb-[64px]">
          See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.
        </p>
      </div>
    </div>
  );
};

export default Header;
