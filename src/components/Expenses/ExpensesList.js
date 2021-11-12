import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  const { expenseItems } = props;

  if (expenseItems.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;

  return (
    <ul className="expenses-list">
      {expenseItems.map((expense) => {
        const { date, title, amount, id } = expense;
        return (
          <ExpenseItem key={id} date={date} amount={amount} title={title} />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
