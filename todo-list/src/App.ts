import express from "express";
import config from "./config";
import loaders from "./loaders";

async function startServer() {
  const app = express();

  await loaders({ expressApp: app });

  // connect server
  app
    .listen(config.port || 1234, () => {
      console.log(`http://${config.host}:${config.port}`);
    })
    .on("error", (err) => {
      process.exit(1);
    });
}

startServer();
