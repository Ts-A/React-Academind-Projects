import './InputField.module.css';

const InputField = ({ label, type, name, value, onChangeHandler }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default InputField;
