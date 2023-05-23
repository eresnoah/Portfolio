import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import classes from "./Classes.module.css";
import Card from "./Card";

interface SubmitProp {
  submitHandler: (arg0: string) => void;
}

function ToDoForm(props: SubmitProp) {
  const { submitHandler } = props;
  const [deadline, setDeadline] = useState("");
  const [text, setText] = useState("");

  function handleTextChange(val: string) {
    setText(val);
    console.log(val);
  }
  function handleDeadlineChange(val: string) {
    setDeadline(val);
    console.log(val);
  }

  function resetForm() {
    setDeadline("");
    setText("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    //serialize data to send
    const todo = JSON.stringify({
      deadline: deadline,
      text: text,
    });

    submitHandler(todo);
    resetForm();
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="deadline">Deadline: </label>
          <input
            value={deadline}
            onChange={(event) => handleDeadlineChange(event.target.value)}
            type="date"
            id="deadline"
            required
          />
        </div>
        <div className={classes.control}>
          <label>Task: </label>
          <input
            value={text}
            onChange={(event) => handleTextChange(event.target.value)}
            type="text"
            id="text"
            required
          />
        </div>
        <div className={classes.actions}>
          <button>submit</button>
        </div>
      </form>
    </Card>
  );
}

export default ToDoForm;
