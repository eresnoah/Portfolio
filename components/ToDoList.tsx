import ToDoItem from "./ToDoItem";
import classes from "./Classes.module.css"
import { ToDo } from "../public/pages";

interface ToDoListProps {
  todos: ToDo[]
}

function ToDoList(props: ToDoListProps) {
  const { todos } = props;

  return (
    <ul className={classes.list}>
      {todos.map((todo: ToDo) => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          deadline={todo.deadline}
          text={todo.text}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
