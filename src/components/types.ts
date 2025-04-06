export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodoListProps {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
}