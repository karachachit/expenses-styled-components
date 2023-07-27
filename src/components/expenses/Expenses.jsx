import React, { useState } from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import Chart from "../Chart/Chart";

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
    <ul className="expenses-list">
      <div className="expenses" />

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
    </ul>
  );
};

export default Expenses;
