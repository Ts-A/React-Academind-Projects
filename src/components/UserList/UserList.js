import Card from '../UI/Card/Card';
import UserItem from './UserItem';
import classes from './UserList.module.css';

const UserList = ({ users }) => {
  const userJSX = users.map(({ username, age, id }) => (
    <UserItem username={username} age={age} key={id} />
  ));

  return (
    <Card>
      <ul className={classes['user-list']}>{userJSX}</ul>
    </Card>
  );
};

export default UserList;
