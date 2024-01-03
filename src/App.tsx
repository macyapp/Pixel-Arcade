// import Like from "./components/Like";
// import Message from "./components/Message";
// import Button from "./components/Button";
// import { useEffect, useState, useRef } from "react";
// import { produce } from "immer";
// import ExpandableText from "./components/ExpandableText";
// import Form from "./components/Form";
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
// import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Pizza", amount: 100, category: "Entertainment" },
    { id: 2, description: "Rent", amount: 10000, category: "Utilities" },
    { id: 3, description: "Salary", amount: 100000, category: "Income" },
    { id: 4, description: "Milk", amount: 5000, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDeleteExpense={(id) =>
          setExpenses(expenses.filter((e) => e.id !== id))
        }
      />
    </>
  );
}

export default App;
