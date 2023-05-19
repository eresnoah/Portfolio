import { useState } from "react";
import classes from "../components/Classes.module.css";
import ToDoList from "../../components/ToDoList";
import ToDoForm from "../../components/ToDoForm";

export interface ToDo {
  id: number;
  text: string;
  deadline: Date;
}

export const todos: ToDo[] = [
  {
    id: 0,
    text: "learn",
    deadline: new Date(),
  },
  {
    id: 1,
    text: "learn",
    deadline: new Date(),
  },
];

export default function Home() {
  const [readyToDos, setToDos] = useState<ToDo[]>([]);

  function updateState(item: ToDo) {
    todos.push(item);
    //sort items by date
    todos.sort((a, b) => a.deadline.valueOf() - b.deadline.valueOf());
    setToDos(todos);
    setToDos([]);
  }

  return (
    <section>
      <ul className={classes.list}>
        <li className={classes.item}>
          <ToDoForm onPostToDo={updateState} />
        </li>
        <li className={classes.item}>
          <ToDoList todos={todos} />
        </li>
      </ul>
    </section>
  );
}
