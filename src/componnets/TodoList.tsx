import type { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

type Props = {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleTodo, deleteTodo } : Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
