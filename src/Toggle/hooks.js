import { useEffect, useState } from "react";
import { updateCounter as updateCounterAPI } from "./actions";

// updates counter every 10 seconds.
const updateCounter = () => {
  const [count, setCounter] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    // interval at which data is updated to the server.
    const duration = 10000;

    // update data every 10 seconds.
    const interval = setInterval(
      () => updateCounterAPI(setCounter, setError),
      duration
    );

    // clean up function that is returned from the useEffect hook.
    // Run on unmount.
    return () => clearInterval(interval);
  }, []);

  return { count, error };
};

export default updateCounter;
