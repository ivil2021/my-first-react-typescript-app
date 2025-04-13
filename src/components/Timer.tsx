/*
Напишите компонент Timer, который использует useRef для хранения ID таймера.
Реализуйте кнопки для запуска и остановки таймера,
который будет отображать прошедшее время в секундах.
*/

import { useState, useRef } from 'react';

export function Timer () {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div className="timer">
      <h1>Таймер</h1>
      <h2>Прошло {seconds} секунд</h2>
      <button onClick={startTimer}>Запустить таймер</button>
      <button onClick={stopTimer}>Остановить таймер</button>
      <button onClick={resetTimer}>Сбросить таймер</button>
    </div>
  );
};
