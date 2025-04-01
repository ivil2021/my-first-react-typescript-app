/*
Создайте компонент Greeting, который принимает пропс name
и отображает приветствие в формате "Привет, [имя]!". 
Используйте этот компонент в основном приложении, передавая разные имена.
*/

// import React from 'react';

interface GreetingProps {
  name: string;
}

export const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Привет, {name}!</h1>;
};
