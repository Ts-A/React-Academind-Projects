import classes from './UserItem.module.css';

const UserItem = ({ username, age }) => {
  return (
    <li className={classes['user-item']}>
      <div className={classes.user}>
        <span>{username} </span>
        <span>({age} years old)</span>
      </div>
    </li>
  );
};

export default UserItem;
