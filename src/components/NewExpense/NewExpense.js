import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const { onAddExpense } = props;
  const [showForm, toggleShowForm] = useState(false);

  const saveExpense = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    onAddExpense(data);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          toggleShowForm={toggleShowForm}
          onSaveExpense={saveExpense}
        />
      ) : (
        <button onClick={() => toggleShowForm(true)}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
