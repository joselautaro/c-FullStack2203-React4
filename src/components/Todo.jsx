import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }
    setTodos(([...todos]).concat(newTodo));
    setTodo("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Nuestra tareas</h2>
      <h3>Ingrese tareas aquí 👇</h3>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese tarea aquí"
            onInput={(e) => setTodo(e.target.value)}
          ></input>
          <button type="submit">➕</button>
        </form>
      </fieldset>

      {todos.map((todo) => (
        <div>
          <div>
            {todo.text} <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
