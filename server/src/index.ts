import * as express from "express";
import * as session from "express-session";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { router as users } from "./routes/api/users";
import { router as auth } from "./routes/authentication/auth";
import { router as profile } from "./routes/users/profile";
import bodyParser = require("body-parser");

const SESSION_SECRET = "asdsd2344KSDlslmkaksd";

const startServer = async () => {
  await createConnection();

  const app = express();

  // middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // session
  app.use(
    session({
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    })
  );

  // routes
  app.use("/api/users", users);
  app.use("/auth", auth);

  app.use("", profile);

  app.get("/", (_, res) => {
    res.send("Hello World");
  });

  const PORT = process.env.PORT || 4000;
  app.listen(4000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
