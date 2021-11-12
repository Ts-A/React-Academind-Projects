import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const { onSaveExpense, toggleShowForm } = props;

  const [formData, setFormData] = useState({
    title: '',
    amount: 0,
    date: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onSaveExpense({
      ...formData,
      amount: +formData.amount,
      date: new Date(formData.date),
    });
    setFormData({
      title: '',
      amount: 0,
      date: '',
    });
    toggleShowForm(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            required
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={formData.amount}
            min="0.01"
            step="0.01"
            required
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, amount: e.target.value }));
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={formData.date}
            required
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, date: e.target.value }));
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={() => toggleShowForm(false)}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
