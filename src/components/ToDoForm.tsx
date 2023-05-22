import { FormEvent, useEffect, useState } from "react";
import classes from "./Classes.module.css"
import Card from "./Card";

function ToDoForm() {

    const [deadline, setDealine] = useState("");
    const [text, setText] = useState("");

    function handleTextChange(val: string) {
        setText(val);
        console.log(val)
    }
    function handleDeadlineChange(val: string) {
        setDealine(val);
        console.log(val)
    }
  
    return (
      <Card>
        <form className={classes.form} action="/" method="POST">
          <div className={classes.control}>
            <label htmlFor="deadline">Deadline: </label>
            <input value={deadline} onChange={(event)=>handleDeadlineChange(event.target.value)} type="date" id="deadline" required/>
          </div>
          <div className={classes.control}>
            <label>Task: </label>
            <input value={text} onChange={(event)=>handleTextChange(event.target.value)}type="text" required/>
          </div>
          <div className={classes.actions}>
            <button>submit</button>
          </div>
        </form>
      </Card>
    );
}

export default ToDoForm;