/*
Создайте компонент ShoppingList, который принимает массив объектов items, 
где каждый объект содержит id, name и price.
Отобразите список покупок, выводя название и цену каждого товара.
Используйте уникальный key для каждого элемента списка.
*/

interface IItem {
  id: number;
  name: string;
  price: number;
}

interface IShoppingListProps {
  items: IItem[];
}

export function ShoppingList ({ items }: IShoppingListProps) {
  return (
    <div className="shopping-list">
        <div><h1>Список покупок</h1></div>
        <ol>
          {items.map(item => (
            <li key={item.id}>
              {item.name} : {item.price}
            </li>
          ))}
        </ol>
      </div>
  );
}
