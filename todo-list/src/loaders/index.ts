import expressLoader from "./express";
import typeormLoader from "./typeorm";
import logger from "../config/winston";

export default async ({ expressApp }) => {
  try {
    await typeormLoader();
    console.log("---------- db Connection");

    await expressLoader({ app: expressApp });
    console.log("---------- Express Intialized");
  } catch (e) {
    logger.error(e.message);
    throw new Error(e);
  }

  // ... Initialize agenda
  // ... or Redis, or whatever you want
};
