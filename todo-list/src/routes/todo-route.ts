import { Router } from "express";
import { TodoController } from "../controllers/TodoController";

const TodoRouter: Router = Router();
const todoController: TodoController = new TodoController();

TodoRouter.get("/", (req, res) => {
  res.send("todo");
});

// https://sanghaklee.tistory.com/57
// https://stoplight.io/blog/crud-api-design/
// Paths that end with a resource name (and typically no trailing slash) are used to list multiple items (/files) or create items without specifying an identifier.

TodoRouter.get("/list", todoController.list);
TodoRouter.get(["/view", "/view/:id"], todoController.view);
TodoRouter.post("/todo", todoController.insert);
TodoRouter.put("/:id", todoController.update);
TodoRouter.delete("/:id", todoController.delete);

export default TodoRouter;
