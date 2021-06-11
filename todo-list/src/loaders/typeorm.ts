import { createConnection, Connection } from "typeorm";

export default async () => {
  try {
    const connection: Connection = await createConnection();
    return connection;
  } catch (e) {
    throw new Error(e);
  }
};

// class DB_CONNECT {
//   public async connection() {
//     try {
//       const db: Connection = await createConnection();
//       return db;
//     } catch (e) {
//       throw new Error(e);
//     }
//   }
// }

// export default new DB_CONNECT();
