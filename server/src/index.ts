import * as express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { router as users } from "./routes/api/users";
import { router as auth } from "./routes/authentication/auth";

const startServer = async () => {
  await createConnection();

  const app = express();

  app.use("/api/users", users);
  app.use("/auth", auth);

  app.get("/", (_, res) => {
    res.send("Hello World");
  });

  const PORT = process.env.PORT || 4000;
  app.listen(4000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
