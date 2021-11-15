import classes from './Card.module.css';

const Card = ({ children, classNames }) => {
  const styles = `${classes.card} ${classNames}`;

  return <div className={styles}>{children}</div>;
};

export default Card;
