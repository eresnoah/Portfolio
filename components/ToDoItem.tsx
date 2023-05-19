import { ToDo } from "../public/pages";
import Card from "./Card";
import classes from "./Classes.module.css";

function ToDoItem(props: ToDo) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.deadline.toLocaleDateString("en-GB")}</h3>
          <p>{props.text}</p>
          <p>ToDo ID: {props.id}</p>
        </div>
      </Card>
    </li>
  );
}


export default ToDoItem;
