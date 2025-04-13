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
import { ITodo } from './components/types';
import { FetchData } from './components/FetchData';
import { WindowWidth } from './components/WindowWidth';
import { Form } from './components/Form';
import { ExpensiveCalculation } from './components/ExpensiveCalculation';
import { FilteredList } from './components/FilteredList';
import { TotalPrice } from './components/TotalPrice';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './components/ThemeContext';

import { useState, useCallback } from 'react';

import { useEffect } from 'react';
import { UserProvider, useUser } from './components/UserContext';
import { UserProfile } from './components/UserProfile';

import { LanguageProvider } from './components/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';

import { FocusInput } from './components/FocusInput';
import { Timer } from './components/Timer';


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

  const toggleTodo = useCallback((id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const itemsToFilter = [
    'Tea',
    'Coffee',
    'Juice',
    'Water',
    'Milk'
  ];

  const prices = [5, 15, 90, 45, 100];

  const SetUser: React.FC = () => {
    const { setUser } = useUser();
  
    useEffect(() => {
      const userData = {
        name: 'Ann Pavlova',
        email: 'ann.pavlova@gmale.com',
      };
      
      setUser(userData);
    }, [setUser]);
  
    return null;
  };

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
      <FetchData />
      <WindowWidth />
      <Form />
      <ExpensiveCalculation number={3} />
      <FilteredList items={itemsToFilter} />
      <TotalPrice prices={prices} />

      <ThemeProvider>
        <div className="theme-toggle">
          <h1>Выбор темы</h1>
          <ThemeToggle />
        </div>
      </ThemeProvider>

      <UserProvider>
        <div className="user-profile">
          <h1>Информация о пользователе</h1>
          <SetUser />
          <UserProfile />
        </div>
      </UserProvider>

      <LanguageProvider>
        <div className="language-provider">
          <h1>Выбор языка</h1>
          <LanguageSelector />
        </div>
      </LanguageProvider>

      <FocusInput />
      <Timer />
    </div>
  );
}
