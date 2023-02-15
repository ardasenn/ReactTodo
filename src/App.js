import "./App.css";
import { Todo } from "./components/todo/Todo";
import { Info } from "./components/Info";

function App() {
  return (
    <>
      <section className="todoapp">
        <Todo />
      </section>
      <Info />
    </>
  );
}
//named export oldu bu şekilde
export { App };
