"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import routes from './api';
var todo_route_1 = __importDefault(require("./routes/todo-route"));
var Server = /** @class */ (function () {
    function Server() {
        this.App = express_1.default();
        this.App.use('/', todo_route_1.default);
        // this.App.use('/api', routes);
    }
    Server.prototype.getInstance = function () {
        return this.App;
    };
    return Server;
}());
exports.default = new Server();
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
//# sourceMappingURL=Server.js.map