import { Router } from "express";
import TodoRouter from "./todo-route";
const router = Router();

router.get("/", function (req, res) {
  res.send("메인 지금은 /todo 뿐");
});

router.use("/todo", TodoRouter);

export default router;
