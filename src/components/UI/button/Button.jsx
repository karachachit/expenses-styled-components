import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return (
    <BtnStyle onClick={props.onClick}>
      {props.title}
    </BtnStyle>
  );
};

export default Button;

const BtnStyle=styled.button`
background-color: #4a026b;
color: #fff;
padding: 1rem;
border-radius: 15px;
font-family: "Inter";
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

&:hover{
  background-color: #600A87;
}
&:activ{
  background: #520B73;
}
`