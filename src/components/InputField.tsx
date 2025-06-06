/*
Напишите компонент InputField, который использует useState для хранения значения текстового поля.
При каждом изменении поля отображайте текущее значение ниже текстового поля.
*/

import { useState } from 'react';

export function InputField () {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-field">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Введите текст" 
      />
      <p>Текущее значение: {inputValue}</p>
    </div>
  );
};
