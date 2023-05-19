import { FormEvent, useEffect, useState } from "react";
import classes from "./Classes.module.css"
import { ToDo, todos } from "../pages";
import Card from "./Card";

interface ToDoFormProps {
    onPostToDo: (newToDo: ToDo) => void
}

function ToDoForm(props: ToDoFormProps) {
    const {onPostToDo} = props;

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
    
    function resetForm() {
        handleDeadlineChange("");
        handleTextChange("");
    }
  
    //gather all input from user and send it to be converted
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      
      const newToDo: ToDo = {
        id: todos.length,
        text: text,
        deadline: new Date(deadline),
      };
      console.log(newToDo)
  
      onPostToDo(newToDo);
      resetForm()
    }
  
    return (
      <Card>
        <form className={classes.form} onSubmit={handleSubmit} action="/post" method="POST">
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