import { useRef, useState } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddToCart }) => {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const amountString = amountRef.current.value;
    const amountNumber = +amountString;
    if (
      amountString.trim().length === 0 ||
      amountNumber < 1 ||
      amountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(amountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
