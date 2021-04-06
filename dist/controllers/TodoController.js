"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
var express_1 = __importDefault(require("express"));
var TodoService_1 = __importDefault(require("../services/TodoService"));
var TodoController = /** @class */ (function () {
    // private todoService: TodoService = new TodoService();
    // 생성자 주입을 사용해서 의존성 주입을 한다.
    // 단위테스트 쉽게 하고, 결합성을 감소시키고 재사용성을 높일 수 있다.
    // 근데 route에서 service까지 호출하는건 괜찮은지
    function TodoController(todoService) {
        this.todoService = todoService;
        this.todoService = todoService;
    }
    TodoController.prototype.getTodos = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonResponse, todoList, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new TodoService_1.default().getTodos()];
                    case 1:
                        todoList = _a.sent();
                        jsonResponse = {
                            data: todoList,
                            statusCode: 200,
                            statusMsg: '조회 성공'
                        };
                        return [2 /*return*/, res.json(jsonResponse)];
                    case 2:
                        e_1 = _a.sent();
                        jsonResponse = {
                            data: {},
                            statusCode: 400,
                            statusMsg: '조회 실패'
                        };
                        throw res.status(400).json(jsonResponse);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TodoController.prototype.getTodo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonResponse, todo, jsonResponse_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (req.params.id == 3)
                            throw express_1.default;
                        return [4 /*yield*/, new TodoService_1.default().getTodo(req.params.id)];
                    case 1:
                        todo = _a.sent();
                        jsonResponse_1 = {
                            data: todo,
                            statusCode: 200,
                            statusMsg: '조회 성공2'
                        };
                        return [2 /*return*/, res.json(todo)];
                    case 2:
                        e_2 = _a.sent();
                        jsonResponse = {
                            data: {},
                            statusCode: 400,
                            statusMsg: '조회 실패2'
                        };
                        throw res.status(e_2.status || 400).json(jsonResponse);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TodoController.prototype.insertTodo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, this.todoService.insertTodo(req.body)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TodoController.prototype.updateTodo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoService.updateTodo()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TodoController.prototype.deleteTodo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoService.deleteTodo(req.params.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TodoController;
}());
exports.TodoController = TodoController;
//# sourceMappingURL=TodoController.js.map