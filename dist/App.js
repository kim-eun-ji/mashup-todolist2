"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Server_1 = __importDefault(require("./Server"));
var dbc_1 = __importDefault(require("./loaders/dbc"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
// .env 파일 내 변수들 환경변수로 설정
var ENV_PATH = path_1.default.resolve(__dirname, "./config/.env");
dotenv_1.default.config({ path: ENV_PATH });
// db connect
dbc_1.default.connection();
// server instance
var app = Server_1.default.getInstance();
// connect server
// (나중에 해보기) port 같은 경우에는 .env 파일을 통해 process.env 에 대입하는 방법을 사용하면 되지만 여기서 따로 다루지는 않겠습니다.( dotenv과 .env 사용해보시길 )
var port = process.env.PORT;
var host = process.env.HOST;
app.listen(port || 213454, function () {
    console.log("http://" + host + ":" + port);
});
//# sourceMappingURL=App.js.map