import { useState } from 'react';
import Card from '../UI/Card/Card';
import InputField from '../UI/InputField/InputField';
import classes from './UserForm.module.css';

const INITIAL_STATE = {
  username: '',
  age: '',
};

const ERROR_CODES = {
  1: { message: 'Username cannot be empty', source: 'Username' },
  2: { message: 'Age cannot be empty', source: 'Age' },
  3: { message: 'Age cannot be below 18', source: 'Age' },
};

const UserForm = ({ onAddNewUser, onError }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const validateData = (user) => {
    if (!user.username || user.username.trim().length === 0)
      throw new Error('1');
    if (!user.age) throw new Error('2');
    if (user.age < 18) throw new Error('3');
  };

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    try {
      e.preventDefault();
      validateData(formData);
      onAddNewUser(formData);
      setFormData(INITIAL_STATE);
    } catch (error) {
      onError(ERROR_CODES[error.message]);
    }
  };

  return (
    <Card>
      <form className={classes['form-control']} onSubmit={submitHandler}>
        <div className={classes['form-control__controls']}>
          <InputField
            classes={classes['form-control__controls']}
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChangeHandler={inputHandler}
          />
          <InputField
            classes={classes['form-control__controls']}
            label="Age (Years)"
            type="number"
            name="age"
            value={formData.age}
            onChangeHandler={inputHandler}
          />
        </div>
        <div className={classes['form-control__actions']}>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
