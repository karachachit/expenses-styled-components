import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "бумага",
    price: 300,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "зарядка",
    price: 243,
    date: new Date(2021, 2, 11),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const addNewExpenses = (data) => {
    const upWardExpenses = [...expenses];
    upWardExpenses.push(data);
    setExpenses(upWardExpenses);
  };
  return (
    <div className="App">
      <NewExpense newExpenseItem={addNewExpenses} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
