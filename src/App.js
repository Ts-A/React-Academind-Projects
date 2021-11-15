import { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.module.css';
import Backdrop from './components/ErrorModal/Backdrop';
import ErrorModal from './components/ErrorModal/ErrorModal';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

const INITIAL_STATE = [
  {
    id: 1,
    username: 'T S Ajeet',
    age: 20,
  },
  {
    id: 2,
    username: 'T S Bruno',
    age: 22,
  },
];

const App = () => {
  const [users, setUsers] = useState(INITIAL_STATE);
  const [isError, toggleIsError] = useState(false);
  const [error, setError] = useState({
    message: '',
    source: '',
  });

  const addNewUser = (data) => {
    const user = { ...data, id: Math.floor(Math.random() * 10000000) };
    setUsers((prev) => [...prev, user]);
  };

  const showError = ({ source, message }) => {
    toggleIsError(true);
    setError({ source, message });
  };

  return (
    <div>
      {isError &&
        ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById('react-backdrop')
        )}
      {isError &&
        ReactDOM.createPortal(
          <ErrorModal
            source={error.source}
            message={error.message}
            onCloseErrorModal={toggleIsError}
            setError={setError}
          />,
          document.getElementById('react-modal')
        )}
      <UserForm onError={showError} onAddNewUser={addNewUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
