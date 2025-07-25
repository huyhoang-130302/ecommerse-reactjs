import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

const CountdownTimer = ({ targetDate }) => {
  const {box, text} = styles;

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <div>
        <span className={box}>{timeLeft.days} <span className={text}>days</span></span>
        <span className={box}>{timeLeft.hours} <span className={text}>hours</span></span>
        <span className={box}>{timeLeft.minutes} <span className={text}>minutes</span></span>
        <span className={box}>{timeLeft.seconds} <span className={text}>seconds</span></span>
      </div>
    </div>
  );
};

export default CountdownTimer;
