/*
Создайте компонент Greeting, который принимает пропс name
и отображает приветствие в формате "Привет, [имя]!". 
Используйте этот компонент в основном приложении, передавая разные имена.
*/

interface IGreetingProps {
  name: string;
}

export function Greeting({ name }: IGreetingProps) {
  return <h1>Привет, {name}!</h1>;
};
