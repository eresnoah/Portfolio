const express = require("express");
const next = require("next");
const zod = require("zod");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

interface Todo {
  id: number;
  text: string;
  deadline: Date;
}

const todos: Todo[] = [
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

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.json());

    server.get("*", (req: any, res: any) => {
      console.log("app get request");
      return handle(req, res);
    });

    server.post("/post", (req: any, res: any) => {
      console.log("post req");
    });

    server.listen(3000, (err: any) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex: { stack: any }) => {
    console.error(ex.stack);
    process.exit(1);
  });
