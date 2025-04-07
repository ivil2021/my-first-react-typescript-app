/*
Напишите компонент FilteredList, который принимает массив строк и использует
useMemo для фильтрации списка на основе введенного пользователем значения в текстовом поле.
Обновляйте список при изменении фильтра.
*/

import { useMemo, useState } from 'react';

interface IFilteredListProps {
  items: string[];
}

export function FilteredList ({ items }: IFilteredListProps) {
  const [filter, setFilter] = useState<string>('');

  const filteredItems = useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, items]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filtered-list">
      <h2>Фильтрация списка</h2>
      <input
        type="text"
        placeholder="Введите текст"
        value={filter}
        onChange={handleChange}
      />
      <ol>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};
