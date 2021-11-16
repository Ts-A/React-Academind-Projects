import { useImperativeHandle, forwardRef, useRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef(({ source, label, type, onChange, onBlur }, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        type.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={source}>{label}</label>
      <input
        ref={inputRef}
        type={source}
        id={source}
        value={type.value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
});

export default Input;
