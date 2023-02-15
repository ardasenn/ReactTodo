import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddTodo = ({ todoList, setTodoList }) => {
  const [todoName, setTodoName] = useState("");

  const fillTodoName = (e) => setTodoName(e.target.value);

  const handleSubmitInput = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: uuidv4(), todoName, isDone: false }]);
    setTodoName("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmitInput}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={fillTodoName}
          value={todoName}
        />
      </form>
    </header>
  );
};
