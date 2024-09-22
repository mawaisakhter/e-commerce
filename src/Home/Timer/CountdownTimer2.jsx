import React, { useState, useEffect } from 'react';

const CountdownTimer2 = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      // Timer has expired
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="flex space-x-4">
      <div className="flex flex-col items-center bg-white text-black rounded-full w-16 md:w-20 h-16 md:h-20 justify-center">
        <p className="text-lg font-bold">0-{timeLeft.days}</p>
        <p className="text-sm">Days</p>
      </div>
      <div className="flex flex-col items-center bg-white text-black rounded-full w-16 md:w-20 h-16 md:h-20 justify-center">
        <p className="text-lg font-bold">0-{timeLeft.hours}</p>
        <p className="text-sm">Hours</p>
      </div>
      <div className="flex flex-col items-center bg-white text-black rounded-full w-16 md:w-20 h-16 md:h-20 justify-center">
        <p className="text-lg font-bold">0-{timeLeft.minutes}</p>
        <p className="text-sm">Minutes</p>
      </div>
      <div className="flex flex-col items-center bg-white text-black rounded-full w-16 md:w-20 h-16 md:h-20 justify-center">
        <p className="text-lg font-bold">0-{timeLeft.seconds}</p>
        <p className="text-sm">Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer2;
