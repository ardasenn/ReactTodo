import React, { useEffect, useState } from "react";

export const List = ({ todoList, setTodoList }) => {
  let completedClassName = "";

  const [filteredList, setFillteredList] = useState([...todoList]); //filteredList yada list
  useEffect(() => {
    setFillteredList([...todoList]);
  }, [todoList]);

  const handleChange = (todoId) => {
    const arr = [...todoList];
    const index = arr.findIndex((item) => item.id == todoId);

    arr[index] = { ...arr[index], isDone: !arr[index].isDone };
    setTodoList(arr);
  };
  const handleAll = (e) => {
    e.preventDefault();
    setFillteredList([...todoList]);
  };
  const handleActive = (e) => {
    e.preventDefault();
    setFillteredList(todoList.filter((todo) => !todo.isDone));
  };
  const handleCompleted = (e) => {
    e.preventDefault();
    setFillteredList(todoList.filter((todo) => todo.isDone));
  };
  const destroyCompleted = () => {
    setTodoList((prev) => prev.filter((todo) => !todo.isDone));
  };

  return (
    <>
      <section className="main">
        <ul className="todo-list">
          {filteredList.map((item) => {
            completedClassName = item.isDone ? "completed" : "";
            return (
              <li key={item.id} className={completedClassName}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={item.isDone}
                    onChange={() => handleChange(item.id)} //immediately funciton call
                  />
                  <label>{item.todoName}</label>
                  <button className="destroy"></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{`${todoList.length} items left`}</strong>
        </span>

        <ul className="filters">
          <li>
            <a href="#/" onClick={handleAll}>
              All
            </a>
          </li>
          <li>
            <a href="#/" onClick={handleActive}>
              Active
            </a>
          </li>
          <li>
            <a href="#/" onClick={handleCompleted}>
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={destroyCompleted}>
          Clear completed
        </button>
      </footer>
    </>
  );
};
