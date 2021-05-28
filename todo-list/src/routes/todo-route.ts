import { Router } from "express";
import { TodoController } from "../controllers/TodoController";

const TodoRouter: Router = Router();
const todoController: TodoController = new TodoController();

TodoRouter.get("/", (req, res) => {
  res.send("todo");
});
TodoRouter.get("/list", todoController.list);
TodoRouter.get(["/view", "/view/:id"], todoController.view);
TodoRouter.post("/add", todoController.insert);
TodoRouter.put("/update/:id", todoController.update);
TodoRouter.delete("/delete/:id", todoController.delete);

export default TodoRouter;
