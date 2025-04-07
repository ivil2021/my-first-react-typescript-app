/*
Создайте компонент ExpensiveCalculation,
который принимает число как пропс и использует useMemo для мемоизации результата тяжелой вычислительной функции,
например, вычисления факториала. Отображайте результат на экране.
*/

import { useMemo } from 'react';

interface IExpensiveCalculationProps {
  number: number;
}

const factorial = (n: number): number => {
  if (n <= 0) return 1;
  return n * factorial(n - 1);
};

export function ExpensiveCalculation ({ number }: IExpensiveCalculationProps) {
  const result = useMemo(() => factorial(number), [number]);

  return (
    <div className="expensive-calculation">
      <h2>Результат вычисления факториала:</h2>
      <p>Факториал {number} = {result}</p>
    </div>
  );
};
