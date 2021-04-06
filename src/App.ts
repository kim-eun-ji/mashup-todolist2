import 'reflect-metadata';
import express from 'express';
import Server from './Server';
import dbc from './loaders/dbc';
import dotenv from 'dotenv';
import path from 'path';

// .env 파일 내 변수들 환경변수로 설정
const ENV_PATH = path.resolve(__dirname, './config/.env');
dotenv.config({ path: ENV_PATH });

// db connect
dbc.connection();

// server instance
const app: express.Application = Server.getInstance();

// connect server
// (나중에 해보기) port 같은 경우에는 .env 파일을 통해 process.env 에 대입하는 방법을 사용하면 되지만 여기서 따로 다루지는 않겠습니다.( dotenv과 .env 사용해보시길 )
const port = process.env.PORT;
const host = process.env.HOST;
app.listen(port || 213454, () => {
  console.log(`http://${host}:${port}`);
});
