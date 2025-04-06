/*
Создайте компонент Counter2 с кнопками для увеличения и уменьшения значения.
Используйте useCallback для мемоизации функций увеличения и уменьшения,
чтобы избежать лишних рендеров дочерних компонентов.
*/

import { useState, useCallback } from 'react';

export function Counter2 () {
  const [count, setCount] = useState<number>(0);

  const countPlus = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const countMinus = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <div className="counter2">
      <h1>Counter2</h1>
      <h2>Текущее значение счетчика: {count}</h2>
      <button onClick={countPlus}>Плюс</button>
      <button onClick={countMinus}>Минус</button>
    </div>
  );
};
