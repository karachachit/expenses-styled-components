import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, date, price }) => {
  return (
    <div className="expense-item">
      <div className="expense-date">
        <p>{date.toString()}</p>
      </div>
      <h2 className="title">{title}</h2>
      <div className="item">
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default ExpenseItem;
