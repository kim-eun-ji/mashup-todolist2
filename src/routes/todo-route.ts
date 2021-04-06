import { Router } from 'express';
import { TodoController } from '../controllers/TodoController';
import TodoService from '../services/TodoService';

const router: Router = Router();
const todoController = new TodoController(new TodoService());

router.get('/', (req, res) => {
  res.send('test입니다~');
});
router.get('/todos', todoController.getTodos);
router.get('/todo/:id', todoController.getTodo);
router.post('/add-todo', todoController.insertTodo);
router.patch('/edit-todo/:id', todoController.updateTodo);
router.delete('/delete-todo/:id', todoController.deleteTodo);

export default router;
