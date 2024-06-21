import { useState } from "react";
import Todo from "./todo";

export type TodoType = {
  id: number;
  name: string;
};

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 0, name: "tache 1" },
    { id: 1, name: "Tache 2" },
  ]);

  const handleDeleteTodo = (id: TodoType["id"]) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {todos.map((todo) => (
        <>
          <Todo todo={todo} handleDeleteTodo={handleDeleteTodo} />
        </>
      ))}
    </div>
  );
};

export default Todos;
