import React, { useState, useEffect } from "react";

const Timer = ({ startingTime }) => {
  const [Time, setTime] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    setTime(((Date.now() - startingTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{Time}</>;
};

export default Timer;
