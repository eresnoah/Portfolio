import express from "express";
import zod from "zod";

const port = 3000;
const hostname = "localhost"
const app = express();

app.use(express.static("pages"));

const newTodoSchema = zod.object({
  text: zod.string(),
  deadline: zod.string(),
});

type NewTodo = zod.infer<typeof newTodoSchema>;

interface Todo {
  id: number;
  text: string;
  deadline: Date;
}

const todos: Todo[] = [];

todos.push({
  id: 1,
  text: "Learn TypeScript",
  deadline: new Date(),
});

app.get("/", (_, res) => {
  res.send(`hello`);
  res.json(todos);
});

app.post("/", (req, res) => {
  try {
    const parsedNewTodo = newTodoSchema.parse(req.body);

    console.log(parsedNewTodo.deadline);

    const newTodo = {
      id: todos.length + 1,
      text: parsedNewTodo.text,
      deadline: new Date(parsedNewTodo.deadline),
    };

    console.log(newTodo);

    todos.push(newTodo);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(port,hostname, () => {
  console.log("app is running at "+ hostname + port);
});
