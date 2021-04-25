import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const expensesList = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 1000,
    date: new Date(2020, 2, 13)
  },
  {
    id: "e2",
    title: "Bike Insurance",
    amount: 2000,
    date: new Date(2021, 2, 14)
  },
  {
    id: "e3",
    title: "Mobile Insurance",
    amount: 3000,
    date: new Date(2022, 2, 15)
  }
];

const App = ()=> {
  const [expenses, setExpenses] = useState(expensesList);
  

  const addExpenseHandler = expense => {
    console.log("App.js");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <h2>Lets get started</h2>
      <p>This is also visible</p>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
