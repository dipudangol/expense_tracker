import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/newExpense";
const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet paper',
    price: 212,
    date: new Date(2020, 4, 23),
  },
  {
    id: 'e2',
    title: 'scrubber',
    price: 222,
    date: new Date(2022, 6, 3),
  },
  {
    id: 'e3',
    title: 'Soap',
    price: 245,
    date: new Date(2022, 2, 23),
  },
  {
    id: 'e4',
    title: 'Brush',
    price: 254,
    date: new Date(2022, 6, 23),
  }
]
const App = () => {

  const [expenses, setExpenses] = useState(dummy_expenses);


  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />

    </div>
  );
}

export default App;
