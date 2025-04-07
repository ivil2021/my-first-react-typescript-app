/*
Создайте компонент WindowWidth, который использует useEffect для отслеживания ширины окна браузера.
Отображайте текущую ширину окна и обновляйте ее при изменении размера окна.
*/

import { useEffect, useState } from 'react';

export function WindowWidth () {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="window-width">
      <h1>Текущая ширина окна: {windowWidth}px</h1>
    </div>
  );
};
