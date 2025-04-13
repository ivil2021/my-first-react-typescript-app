/*
Создайте компонент FocusInput, который использует useRef для получения ссылки на текстовое поле.
Реализуйте кнопку, которая при нажатии устанавливает фокус на это текстовое поле.
*/

import { useRef } from 'react';

export function FocusInput () {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="focus-input">
      <h1>Фокус на текстовом поле</h1>
      <input type="text" ref={inputRef} placeholder="Введите текст..." />
      <button onClick={handleFocus}>Установить фокус на текстовом поле</button>
    </div>
  );
};
