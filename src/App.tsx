import './App.css';
import { Greeting } from './components/Greeting';
import { Profile } from './components/Profile';
import { ShoppingList } from './components/ShoppingList';

export function App() {
  const items = [
    { id: 1, name: 'Яблоки', price: 5 },
    { id: 2, name: 'Бананы', price: 15 },
    { id: 3, name: 'Апельсины', price: 25 },
  ];

  return (
    <div className="App">
      <Greeting name="Аня" />
      <Greeting name="Андрей" />
      <Profile name="Аня" age={23} location="Таганрог" />
      <ShoppingList items={items} />
    </div>
  );
}
