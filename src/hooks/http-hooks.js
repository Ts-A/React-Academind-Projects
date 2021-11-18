import { useCallback, useState } from 'react';

const DB_URL =
  'https://react-academind-course-d7f5b-default-rtdb.firebaseio.com/tasks.json';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const taskHandler = useCallback(async (method, dataHandler, taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response =
        method === 'GET'
          ? await fetch(DB_URL)
          : await fetch(DB_URL, {
              method: 'POST',
              body: JSON.stringify({
                text: taskText,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      dataHandler(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    error,
    isLoading,
    taskHandler,
  };
};

export default useHttp;
