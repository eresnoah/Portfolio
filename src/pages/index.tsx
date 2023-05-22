import { useEffect, useState } from "react";
import classes from "../components/Classes.module.css";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import Layout from "../components/layout/Layout";
import { error } from "console";
import { Todo } from "../../main";

export default function Home() {
  const [loadedTodos, setLoadedTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((data) => {
        const todos: Todo[] = [];

        for (const key in data) {
          const todo: Todo = {
            id: key,
            ...data[key],
          };

          todos.push(todo);
          console.log(todo);
        }

        setLoadedTodos(todos);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <ul className={classes.list}>
        <li className={classes.item}>
          <ToDoForm />
        </li>
        <li className={classes.item}>
          <ToDoList todos={loadedTodos} />
        </li>
      </ul>
    </section>
  );
}
