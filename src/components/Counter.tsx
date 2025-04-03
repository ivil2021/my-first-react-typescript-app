/*
Создайте компонент Counter, который использует useState для управления состоянием счетчика. 
Добавьте две кнопки: одну для увеличения счетчика на 1 и другую для уменьшения счетчика на 1.
Выводите текущее значение счетчика на экран.
*/

import { useState } from 'react';

export function Counter () {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount(count + 1);
  };

  const countMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Текущее значение счетчика: {count}</h1>
      <button onClick={countPlus}>Плюс</button>
      <button onClick={countMinus}>Минус</button>
    </div>
  );
};
