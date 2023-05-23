import { Todo } from "../server/main";
import Card from "./Card";
import classes from "./Classes.module.css";

function ToDoItem(props: Todo) {
  const formattedDeadline: string = new Date(props.deadline).toLocaleDateString("en-GB")

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{formattedDeadline}</h3>
          <p>{props.text}</p>
          <p>ToDo ID: {props.id}</p>
        </div>
      </Card>
    </li>
  );
}


export default ToDoItem;
