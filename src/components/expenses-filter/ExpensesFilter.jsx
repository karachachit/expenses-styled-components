import React from "react";
import { styled } from "styled-components";

const ExpensesFilter = ({ value, onChange }) => {
  return (
    <ExpensesFilterStyled>
      <ExpensesFilterControl>
        <SelectStyled value={value} onChange={onChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </SelectStyled>
      </ExpensesFilterControl>
    </ExpensesFilterStyled>
  );
};

export default ExpensesFilter;

const ExpensesFilterStyled = styled.div`
  color: white;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 1rem;
`;

const ExpensesFilterControl = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SelectStyled=styled.select`
width: 100px;
height: 50px;
border-radius: 5px;
text-align: center;
`