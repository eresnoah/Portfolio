import express from "express";
import next from "next";
import zod from "zod";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

interface Todo {
  id: number;
  text: string;
  deadline: Date;
}

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req: any, res: any) => {
      console.log("app get request");
      return handle(req, res);
    });

    server.post("/post", (req: any, res: any) => {
      console.log("post req");
    });

    server.listen(3000, () => {
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex: { stack: any }) => {
    console.error(ex.stack);
    process.exit(1);
  });
