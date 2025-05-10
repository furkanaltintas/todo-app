import { useRef, useState } from "react";
import TodoList from "./componnets/TodoList";
import type { Todo } from "./types/Todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    const value = inputRef.current?.value.trim();
    if (!value) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: value,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    inputRef.current!.value = "";

    // Input'a focus ekleme
    inputRef.current!.focus();
  };

  const handleClear = () => {
    setTodos([]);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="box">
        <h1>TODO LIST</h1>
        <div className="todo-list-wrapper">
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
        <div className="content">
          <input
            type="text"
            placeholder="Metin giriniz..."
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleAdd}>Ekle</button>
          { todos.length > 1 && (<button onClick={handleClear}>Temizle</button>) }
        </div>
        <span className="text">
          {todos.length > 0 && `Listede ${todos.length} tane yapılacak var`}
        </span>
      </div>
    </div>
  );
};

export default App;
