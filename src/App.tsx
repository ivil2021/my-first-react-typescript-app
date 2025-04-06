import './App.css';
import { Greeting } from './components/Greeting';
import { Profile } from './components/Profile';
import { ShoppingList } from './components/ShoppingList';
import { Counter } from './components/Counter';
import { InputField } from './components/InputField';
import { Toggle } from './components/Toggle';
import { ButtonList } from './components/ButtonList';
import { Counter2 } from './components/Counter2';
import { TodoList } from './components/TodoList';

import { useState, useCallback } from 'react';
import { ITodo } from './components/types';

export function App() {
  const items = [
    { id: 1, name: 'Яблоки', price: 5 },
    { id: 2, name: 'Бананы', price: 15 },
    { id: 3, name: 'Апельсины', price: 25 },
  ];

  const buttons = [
    { text: 'Кнопка 1', onClick: () => {} },
    { text: 'Кнопка 2', onClick: () => {} },
    { text: 'Кнопка 3', onClick: () => {} },
  ];

  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, text: 'Задача 1', completed: false },
    { id: 2, text: 'Задача 2', completed: false },
    { id: 3, text: 'Задача 3', completed: false },
  ]);

  // Мемоизированная функция для обновления статуса выполненной задачи
  const toggleTodo = useCallback((id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <div className="App">
      <Greeting name="Аня" />
      <Greeting name="Андрей" />
      <Profile name="Аня" age={23} location="Таганрог" />
      <ShoppingList items={items} />
      <Counter />
      <InputField />
      <Toggle />
      <ButtonList buttons={buttons} />
      <Counter2 />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}
