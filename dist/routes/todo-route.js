"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TodoController_1 = require("../controllers/TodoController");
var TodoService_1 = __importDefault(require("../services/TodoService"));
var router = express_1.Router();
var todoController = new TodoController_1.TodoController(new TodoService_1.default());
router.get('/', function (req, res) {
    res.send('test입니다~');
});
router.get("/todos", todoController.getTodos);
router.get("/todo/:id", todoController.getTodo);
router.post("/add-todo", todoController.insertTodo);
router.put("/edit-todo/:id", todoController.updateTodo);
router.delete("/delete-todo/:id", todoController.deleteTodo);
exports.default = router;
//# sourceMappingURL=todo-route.js.map