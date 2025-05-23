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

import { useState, useCallback, useMemo } from 'react';

import { useEffect } from 'react';
import { UserProvider, useUser } from './components/UserContext';
import { UserProfile } from './components/UserProfile';

import { LanguageProvider } from './components/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';

import { FocusInput } from './components/FocusInput';
import { Timer } from './components/Timer';
import { ImagePreview } from './components/ImagePreview';

import { Button } from './components/Button';

import { Card } from './components/Card';
import image1 from "./img/photo1.jpg";
import image2 from "./img/photo2.jpg";
import image3 from "./img/photo3.jpg";

// import { ThemeToggle2 } from './components/ThemeToggle2/index';

import { TTThemeToggle } from './components/TTThemeToggle/TTThemeToggle';
import { AppContainer, Card2 } from './components/TTThemeToggle/index.styles';


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

  const cardsInfo = [
    {
        image: image1,
        title: 'заголовок карточки 1',
        description: 'описание карточки 1',
    },
    {
        image: image2,
        title: 'заголовок карточки 2',
        description: 'описание карточки 2',
    },
    {
        image: image3,
        title: 'заголовок карточки 3',
        description: 'описание карточки 3',
    }
  ];

  const cardsToRender = useMemo(() => {
      return cardsInfo.map((item, index) => (
        <Card key={index} image={item.image} title={item.title} description={item.description} />
      ));
  }, [cardsInfo]);

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
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
      <ImagePreview />

      <Button backgroundColor="#28a745" color="#ffffff">
        Нажми меня
      </Button >

      <ThemeProvider>
        <div className="theme-toggle">
          <h1>Выбор темы</h1>
          {/* <ThemeToggle2 background="#ffffff" text="qwqerty" buttonBackground="#333333" buttonText="zxfd" /> */}
        </div>
      </ThemeProvider>

      {cardsToRender}

      <AppContainer isDark={isDark}>
            <Card2 isDark={isDark}>
                <h1>Смена темы</h1>
                <p>Текущая тема — {isDark ? 'тёмная' : 'светлая'}</p>
            </Card2>
            <TTThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
      </AppContainer>

    </div>
  );
}
