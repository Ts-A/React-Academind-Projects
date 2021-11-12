import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const { expenses } = props;

  const [filterYear, setFilterYear] = useState(2021);

  const handleExpenseFilter = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={filterYear}
          onChangeFilter={handleExpenseFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenseItems={filteredExpenses} />
      </Card>
      ;
    </div>
  );
}

export default Expenses;
