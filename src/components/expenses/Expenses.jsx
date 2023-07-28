import React, { useState } from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import Chart from "../Chart/Chart";
import { styled } from "styled-components";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredItems = expenses.filter((element) => {
    const yearString = new Date(element.date).getFullYear().toString();
    return yearString === selectedYear;
  });
  return (
    <ExpensesList>
      <div />

      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart items={filteredItems} />
      <div />

      {filteredItems.map((element) => {
        return (
          <ExpenseItem
            key={element.id + new Date().getTime()}
            title={element.title}
            price={element.price}
            date={element.date}
          />
        );
      })}
    </ExpensesList>
  );
};

export default Expenses;


const ExpensesList=styled.ul`
background: #1f1f1f;
margin: 2rem auto;
width: 48rem;
padding: 1rem;
border-radius: 10px;
`