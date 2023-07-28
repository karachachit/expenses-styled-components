import React from "react";
import { styled } from "styled-components";

const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  return (
    <div>
      <LabelStyle htmlFor={id}>
        {labelName}
      </LabelStyle>
      <FormInputStyle
        type={inputType}
        placeholder={placeholder || "..."}
        id={id}
        {...rest}
      />
    </div>
  );
};

export default FormInput;

const LabelStyle=styled.label`
font-weight: bold;
margin-bottom: 0.5rem;
display: block;
`
const FormInputStyle=styled.input`
color: #959595;
font: inherit;
padding: 0.5rem;
border-radius: 6px;
border: 1px solid rgb(205, 205, 205);
width: 20rem;

&:input:focus{
  border: 1px solid #222;
  color: #222;
}
`