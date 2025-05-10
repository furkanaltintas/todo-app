import type { Todo } from "../types/Todo";

type Props = {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo, deleteTodo }: Props) => {
  return (
    <li key={todo.id}>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)}>Sil</button>
      </li>
  )
}

export default TodoItem