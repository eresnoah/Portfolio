import ToDoItem from "./ToDoItem";
import classes from "./Classes.module.css"
import { Todo } from "../server/main";

interface ToDoListProps {
  todos: Todo[]
}

function ToDoList(props: ToDoListProps) {
  const { todos } = props;

  return (
    <ul className={classes.list}>
      {todos.map((todo: Todo) => (
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
