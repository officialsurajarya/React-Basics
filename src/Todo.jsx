import { useState } from "react";

export default function Todo() {
  let [todos, setTodos] = useState(["Sample", "Hello"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add</button>
      <h3>Tasks</h3>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
