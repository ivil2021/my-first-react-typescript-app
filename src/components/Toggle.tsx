/*
Создайте компонент Toggle, который использует useState для переключения состояния (включено/выключено).
Отображайте текст "Включено" или "Выключено" в зависимости от текущего состояния и добавьте кнопку для переключения.
*/

import React, { useState } from 'react';

export const Toggle: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className="toggle">
      <p>{isOn ? 'Включено' : 'Выключено'}</p>
      <button onClick={toggleSwitch}>
        Переключить
      </button>
    </div>
  );
};
