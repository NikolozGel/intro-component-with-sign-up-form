import React from "react";

const InputField = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-[279px] xl:w-[460px] h-[56px] border-[1px] border-[#DEDEDE] rounded-[5px] py-[15px] pl-[19px] xl:pl-[32px] ${
          error ? "border-[#FF7979]" : ""
        } mt-[19px]`}
      />
      {error && (
        <p className="text-[11px] text-[#FF7979] text-right font-medium">
          {placeholder} cannot be empty
        </p>
      )}
    </div>
  );
};

export default InputField;
