import * as express from "express";
export const router = express.Router();

// get all users
router.get("/", (req, res) => {
  res.send("All Users");
});

// get user with id
router.get("/:id", (req, res) => {
  res.send(`User with id: ${req.params.id}`);
});

// update user
router.put("/:id", (req, res) => {
  res.send(`User with id: ${req.params.id}, was updated`);
});

// delete user
router.delete("/:id", (req, res) => {
  res.send(`User with id: ${req.params.id}, was deleted`);
});
