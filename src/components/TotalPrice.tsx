/*
Разработайте компонент TotalPrice, который принимает массив цен
и использует useMemo для вычисления общей суммы.
Отображайте итоговую цену на экране.
*/

import { useMemo } from 'react';

interface ITotalPriceProps {
  prices: number[];
}

export function TotalPrice ({ prices }: ITotalPriceProps) {
  const total = useMemo(() => {
    return prices.reduce((acc, price) => acc + price, 0);
  }, [prices]);

  return (
    <div className="total-price">
      <h2>Итого:</h2>
      <p>{total}</p>
    </div>
  );
};
