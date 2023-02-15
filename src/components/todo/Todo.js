import React, { useState } from "react";
import { AddTodo } from "./AddTodo/AddTodo";
import { List } from "./List/List";
import { v4 as uuidv4 } from "uuid";

export const Todo = () => {
  const [todoList, setTodoList] = useState([
    { id: uuidv4(), todoName: "Yatagi topla", isDone: true },
    { id: uuidv4(), todoName: "Evi Sil", isDone: false },
    { id: uuidv4(), todoName: "Yemek yap", isDone: false },
  ]);
  return (
    <div>
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      <List todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};
