import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT')
    return {
      value: action.payload.value,
      isValid: action.payload.value.includes('@'),
    };

  if (action.type === 'INPUT_BLUR')
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };

  return {
    value: '',
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT')
    return {
      value: action.payload.value,
      isValid: action.payload.value.length >= 7,
    };

  if (action.type === 'INPUT_BLUR')
    return {
      value: state.value,
      isValid: state.value.length >= 7,
    };

  return {
    value: '',
    isValid: false,
  };
};

const Login = (props) => {
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: undefined,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: undefined,
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: emailValidity } = emailState;
  const { isValid: passwordValidity } = passwordState;

  useEffect(() => {
    const timeIdentifier = setTimeout(() => {
      setFormIsValid(
        emailState.value.includes('@') && passwordState.value.trim().length > 6
      );
    }, 500);

    return () => clearTimeout(timeIdentifier);
  }, [emailValidity, passwordValidity]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      payload: {
        value: event.target.value,
      },
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'USER_INPUT',
      payload: {
        value: event.target.value,
      },
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_BLUR',
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'INPUT_BLUR',
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) authCtx.onLogin(emailState.value, passwordState.value);
    else if (!emailValidity) emailRef.current.focus();
    else passwordRef.current.focus();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          source="email"
          label="Email"
          type={emailState}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordRef}
          source="password"
          label="Password"
          type={passwordState}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
