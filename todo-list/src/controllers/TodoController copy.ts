import e from "express";
import Todos from "../entity/Todos";
import TodoService from "../services/TodoService";

export class TodoController {
  // constructor(private readonly todoService: TodoService) {}

  async getTodos(req, res): Promise<Todo[]> {
    let jsonResponse: JsonResponse;
    try {
      const todoList: Todo[] = await new TodoService().getTodos();
      jsonResponse = {
        data: todoList,
        statusCode: 200,
        statusMsg: "조회 성공",
      };
      return res.json(jsonResponse);
    } catch (e) {
      jsonResponse = {
        data: {},
        statusCode: 400,
        statusMsg: "조회 실패",
      };
      throw res.status(400).json(jsonResponse);
    }
  }

  async getTodo(req, res): Promise<Todo> {
    let jsonResponse: JsonResponse;
    try {
      if (!req.params.id) throw new Error("아이디없음음음음음음");
      const todo = await new TodoService().getTodo(req.params.id);
      const jsonResponse: JsonResponse = {
        data: todo,
        statusCode: 200,
        statusMsg: "조회 성공",
      };
      return res.json(jsonResponse);
    } catch (e) {
      jsonResponse = {
        data: {},
        statusCode: 400,
        statusMsg: e.message || "getTodo 에러발생",
      };
      return res.status(e.status || 400).json(jsonResponse);
    }
  }

  async insertTodo(req, res): Promise<void> {
    console.log(req.body.ffff);
    // await TodoService.insertTodo(req.body);
  }

  async updateTodo(req, res): Promise<void> {
    // await TodoService.updateTodo();
  }

  async deleteTodo(req, res): Promise<void> {
    // await TodoService.deleteTodo(req.params.id);
  }
}
