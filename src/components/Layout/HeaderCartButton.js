import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const countCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const [btnHigh, setBtnHigh] = useState(false);
  const btnClasses = `${classes.button} ${btnHigh ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnHigh(true);
    const timer = setTimeout(() => {
      setBtnHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{countCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
