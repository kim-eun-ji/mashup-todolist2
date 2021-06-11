import express from "express";
import router from "../routes";

export default async ({ app }: { app: express.Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/", router);
  // ...More middlewares

  // Return the express app
  return app;
};

// import express from 'express';
// // import routes from './api';
// import router from './routes/todo-route';

// class Server {
//   private App: express.Application;

//   constructor() {
//     this.App = express();
//     this.App.use('/', router);
//     // this.App.use('/api', routes);
//   }

//   public getInstance(): express.Application {
//     return this.App;
//   }
// }

// export default new Server();
