import React from "react";
import { styled } from "styled-components";

const ExpenseItem = ({ title, date, price }) => {
  return (
    <ExpenseItemStyle>
      <ExpenseDate>
        <p>{date.toString()}</p>
      </ExpenseDate>
      <Title>{title}</Title>
      <Item>
        <Price>${price}</Price>
      </Item>
    </ExpenseItemStyle>
  );
};

export default ExpenseItem;

const ExpenseItemStyle = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 1fr;
  background: #4b4b4b;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ExpenseDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 6rem;
  height: 6rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
`;

const Title = styled.h2`
  color: #fff;
  padding: 1rem 2rem;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Price =styled.span`
color: #fff;
border: 1px solid #fff;
padding: 1rem;
background-color: #40005d;
border-radius: 10px;
`