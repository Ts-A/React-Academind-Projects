import { Fragment } from 'react';
import classes from './Header.module.css';
import meals from '../../assets/food.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart, onHideCart }) => {
  return (
    <Fragment key="header">
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
