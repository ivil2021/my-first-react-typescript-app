/*
Разработайте компонент TodoList, который отображает список задач.
Используйте useCallback для мемоизации функции, которая обновляет статус выполненной задачи,
чтобы избежать лишних рендеров.
*/

import { ITodoListProps } from './types';

export function TodoList ({ todos, toggleTodo }: ITodoListProps) {
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
