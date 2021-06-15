import Todos from "../entity/Todos";
import { createConnection } from "typeorm";
// import { TodoRepository } from "../repository/TodoRepository";
// import { BaseService } from "./BaseService";

// export default class TodoService extends BaseService {
export default class TodoService {
  protected todoRepository;

  constructor() {
    createConnection().then((c) => (this.todoRepository = c.getRepository(Todos)));
  }

  public list = async (): Promise<Todo[]> => {
    return await this.todoRepository.find();
    // return await Todos.find();
  };

  public view = async (id: number): Promise<Todo> => {
    return await this.todoRepository.findOne(id);
    // return await Todos.findOne(id);
    return null;
  };

  public save = async (data: Todos) => {
    return await this.todoRepository.save(data);
    // return await data.save();
    return null;
  };

  public remove = async (data: Todos) => {
    return await this.todoRepository.remove(data);
    // return await data.remove();
    return null;
  };
}
