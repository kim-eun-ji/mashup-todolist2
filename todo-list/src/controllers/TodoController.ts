import { check } from "express-validator";
import express from "express";
import TodoService from "../services/TodoService";
import { BaseController } from "./BaseController";
import Todos from "../entity/Todos";

export class TodoController extends BaseController {
  constructor() {
    super(new TodoService());
  }

  public insert = async (req: express.Request, res: express.Response) => {
    const todo = new Todos();
    todo.text = req.body.text;
    todo.done = false;
    return this.save<Todo>(req, res, todo);
  };

  public update = async (req: express.Request, res: express.Response) => {
    try {
      const data = await this.service.view(req.params.id);

      if (!data) throw new Error("해당 id에 대한 데이터가 존재하지 않습니다.");

      data.done = !data.done;
      return await this.save<Todo>(req, res, data);
    } catch (e) {
      return this.responseController.clientError(res, e.message);
    }
  };

  public delete = async (req: express.Request, res: express.Response) => {
    try {
      const data = await this.service.view(req.params.id);
      if (!data) throw new Error("해당 id에 대한 데이터가 존재하지 않습니다.");
      return await this.remove<Todo>(req, res, data);
    } catch (e) {
      return this.responseController.clientError(res, e.message);
    }
  };
}
