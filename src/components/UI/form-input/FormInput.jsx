import React from "react";
import "./FormInput.css";

const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  return (
    <div>
      <label className="label" htmlFor={id}>
        {labelName}
      </label>
      <input
        className="form-input"
        type={inputType}
        placeholder={placeholder || "..."}
        id={id}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
