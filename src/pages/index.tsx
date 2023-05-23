import { useEffect, useState } from "react";
import classes from "../components/Classes.module.css";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { Todo } from "../server/main";

export default function Home() {
  const [loadedTodos, setLoadedTodos] = useState<Todo[]>([]);

  function updateTodos() {
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
        }
        setLoadedTodos(todos);
      })
      .catch((error) => console.log(error));
  }

  function postTodos(body: string) {
    //make a new post request to the server
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3001/todos");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    //await for the request to be complete and then fetch our new todos from
    //the server
    xhr.onreadystatechange = () => {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        updateTodos();
      }
    };
    //send data
    xhr.send(body);
  }

  //runs this once whenever the page is refreshed
  useEffect(() => {
    updateTodos();
  }, []);

  return (
    <section>
      <ul className={classes.list}>
        <li className={classes.item}>
          <ToDoForm submitHandler={postTodos} />
        </li>
        <li className={classes.item}>
          <ToDoList todos={loadedTodos} />
        </li>
      </ul>
    </section>
  );
}
