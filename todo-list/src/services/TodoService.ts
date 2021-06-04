import Todos from "../entity/Todos";
import { TodoRepository } from "../repository/TodoRepository";
import { BaseService } from "./BaseService";

// export default class TodoService extends BaseService {
export default class TodoService {
  constructor() {}

  public list = async (): Promise<Todo[]> => {
    return await Todos.find();
  };

  public view = async (id: number): Promise<Todo> => {
    return await Todos.findOne(id);
  };

  public save = async (data: Todos) => {
    return await data.save();
  };

  public remove = async (data: Todos) => {
    return await data.remove();
  };
}
