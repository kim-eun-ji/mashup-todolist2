import e from 'express';
import Todos from '../entity/Todo';
import TodoService from '../services/TodoService';

export class TodoController {
  // private todoService: TodoService = new TodoService();

  // 생성자 주입을 사용해서 의존성 주입을 한다.
  // 단위테스트 쉽게 하고, 결합성을 감소시키고 재사용성을 높일 수 있다.
  // 근데 route에서 service까지 호출하는건 괜찮은지
  constructor(private todoService: TodoService) {
    this.todoService = todoService;
  }

  async getTodos(req, res): Promise<Todo[]> {
    let jsonResponse: JsonResponse;
    try {
      const todoList: Todo[] = await new TodoService().getTodos();
      jsonResponse = {
        data: todoList,
        statusCode: 200,
        statusMsg: '조회 성공',
      };
      return res.json(jsonResponse);
    } catch (e) {
      jsonResponse = {
        data: {},
        statusCode: 400,
        statusMsg: '조회 실패',
      };
      throw res.status(400).json(jsonResponse);
    }
  }

  async getTodo(req, res): Promise<Todo> {
    /*(node:15004) UnhandledPromiseRejectionWarning: #<ServerResponse>
(node:15004) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:15004) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code. */
    let jsonResponse: JsonResponse;
    try {
      if (req.params.id == 3) throw new Error('3번들어오면 에러날려보기');
      const todo = await new TodoService().getTodo(req.params.id);
      const jsonResponse: JsonResponse = {
        data: todo,
        statusCode: 200,
        statusMsg: '조회 성공',
      };
      return res.json(jsonResponse);
    } catch (e) {
      jsonResponse = {
        data: {},
        statusCode: 400,
        statusMsg: e.message || 'getTodo 에러발생',
      };
      throw res.status(e.status || 400).json(jsonResponse);
    }
  }

  async insertTodo(req, res): Promise<void> {
    console.log(req.body);
    await this.todoService.insertTodo(req.body);
  }

  async updateTodo(req, res): Promise<void> {
    await this.todoService.updateTodo();
  }

  async deleteTodo(req, res): Promise<void> {
    await this.todoService.deleteTodo(req.params.id);
  }
}
