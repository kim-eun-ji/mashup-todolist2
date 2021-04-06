"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TodoController_1 = require("../controllers/TodoController");
var router = express_1.Router();
var todoController = new TodoController_1.TodoController();
router.get('/', function (req, res) {
    res.send('hello!');
});
router.get("/todos", todoController.getTodos);
router.get("/todo/:id", todoController.getTodo);
router.post("/add-todo", todoController.insertTodo);
router.put("/edit-todo/:id", todoController.updateTodo);
router.delete("/delete-todo/:id", todoController.deleteTodo);
exports.default = router;
//# sourceMappingURL=index.js.map