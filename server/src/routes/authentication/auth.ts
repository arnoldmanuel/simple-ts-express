import * as express from "express";
export const router = express.Router();

// login user
router.post("/login", (req, res) => {
  res.send("user was authenticated");
});

// register user
router.post("/register", (req, res) => {
  res.send("user was registered");
});
