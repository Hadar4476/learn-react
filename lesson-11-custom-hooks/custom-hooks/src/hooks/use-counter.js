import { useState, useEffect } from "react";

const useCounter = (action = "increase") => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (action === "decrease") {
          return prevCounter - 1;
        }

        return prevCounter + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [action]);

  return counter;
};

export default useCounter;
