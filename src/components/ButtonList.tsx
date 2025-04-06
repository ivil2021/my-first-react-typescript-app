/*
Напишите компонент ButtonList, который принимает массив объектов с текстом и обработчиками клика. 
Используйте useCallback для создания мемоизированной версии функции обработчика, 
чтобы передавать ее в дочерние компоненты кнопок. При каждом клике выводите текст кнопки в консоль.
*/

import { useCallback } from 'react';

interface IButtonItem {
  text: string;
  onClick: () => void;
}

interface IButtonListProps {
  buttons: IButtonItem[];
}

export function ButtonList ({ buttons }: IButtonListProps) {
  const handleClick = useCallback((text: string) => {
    console.log(text);
  }, []);

  return (
    <div className="button-list">
      <h1>Button List</h1>
      {buttons.map((button, index) => (
        <button key={index} onClick={() => handleClick(button.text)}>
          {button.text}
        </button>
      ))}
    </div>
  );
};
