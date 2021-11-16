import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return (
    <Fragment key="modal">
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('modal')
      )}
    </Fragment>
  );
};

export default Modal;
