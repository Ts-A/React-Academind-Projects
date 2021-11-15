import Card from '../UI/Card/Card';
import classes from './ErrorModal.module.css';

const ErrorModal = ({ source, message, onCloseErrorModal, setError }) => {
  const handleClose = () => {
    onCloseErrorModal(false);
    setError({
      message: '',
      source: '',
    });
  };

  return (
    <Card id="error-modal" classNames={classes.modal}>
      <header>{source}</header>
      <section>{message}</section>
      <div>
        <button onClick={handleClose}>Okay</button>
      </div>
    </Card>
  );
};

export default ErrorModal;
