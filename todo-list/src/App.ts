import express from "express";
import config from "./config";
import loaders from "./loaders";

async function startServer() {
  const app = express();
  try {
    await loaders({ expressApp: app });

    app
      .listen(config.port || 1234, () => {
        console.log(`http://${config.host}:${config.port}`);
      })
      .on("error", (err) => {
        process.exit(1);
      });
  } catch (e) {
    return new Error(e);
  }

  // connect server
}

startServer();
