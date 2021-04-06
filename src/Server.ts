import express from 'express';
// import routes from './api';
import router from './routes/todo-route';

class Server {
  private App: express.Application;

  constructor() {
    this.App = express();
    this.App.use('/', router);
    // this.App.use('/api', routes);
  }

  public getInstance(): express.Application {
    return this.App;
  }
}

export default new Server();

// class App {
//     public application: express.Application;

//     constructor() {
//       this.application = express();
//       this.router();
//     }

//     private router(): void {
//       this.application.get('/', (req: express.Request, res: express.Response) => {
//         res.send('hello!');
//       })
//     }
//   }

//   export default App;
