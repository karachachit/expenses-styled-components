import React, { useState } from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import Button from "../UI/button/Button";
import { styled } from "styled-components";

const NewExpense = ({ newExpenseItem }) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm = () => {
    setShowForm((showForm) => !showForm);
  };
  return (
    <NewExpenseStyle>
      {!showForm ? (
        <Button title="Добавить новый расход" onClick={showExpenseForm} />
      ) : (
        <ExpenseForm
          onShowForm={showExpenseForm}
          newExpenseData={newExpenseItem}
        />
      )}
    </NewExpenseStyle>
  );
};

export default NewExpense;

const NewExpenseStyle = styled.div`
  background-color: #ad9be9;
  padding: 1rem;
  margin: 2rem auto;
  width: 48rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
