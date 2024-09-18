import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-10-31T23:59:59'); // Replace with your target date
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20">
      
      <div className="flex items-center gap-3 text-color-text-3 mb-3">
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs md:text-sm font-bold">Days</p>
          <p className="text-2xl md:text-4xl font-semibold">0-{timeLeft.days}</p>
        </div>
        <p className="text-3xl md:text-4xl text-red-600 font-bold">:</p>
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs md:text-sm font-bold">Hours</p>
          <p className="text-2xl md:text-4xl font-semibold">0-{timeLeft.hours}</p>
        </div>
        <p className="text-3xl md:text-4xl text-red-600 font-bold">:</p>
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs md:text-sm font-bold">Minutes</p>
          <p className="text-2xl md:text-4xl font-semibold">0-{timeLeft.minutes}</p>
        </div>
        <p className="text-3xl md:text-4xl text-red-600 font-bold">:</p>
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs md:text-sm font-bold">Seconds</p>
          <p className="text-2xl md:text-4xl font-semibold">0-{timeLeft.seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
