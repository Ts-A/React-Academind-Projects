// import { useState } from 'react';
import useHttp from '../../hooks/http-hooks';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const performTask = (taskText, obj) => {
    const generatedId = obj.name; // firebase-specific => "name" contains generated id
    const createdTask = {
      id: generatedId,
      text: taskText,
    };

    props.onAddTask(createdTask);
  };

  const { error, isLoading, taskHandler: pushTask } = useHttp();

  const enterTaskHandler = async (taskText) => {
    pushTask('POST', performTask.bind(null, taskText), taskText);
    // setIsLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch(
    //     'https://react-academind-course-d7f5b-default-rtdb.firebaseio.com/tasks.json',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error('Request failed!');
    //   }

    //   const data = await response.json();

    //   const generatedId = data.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };

    //   props.onAddTask(createdTask);
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
