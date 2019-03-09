import * as express from "express";
import { User } from "../../entity/User";
export const router = express.Router();

// get all users
router.get("/", async (req, res) => {
  if (!req.session.qid) {
    res.status(403).send("Your not authenticated");
  }
  const users = await User.find();
  res.send(users);
});

// get user with id
router.get("/:id", async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  res.send(user);
});

// update user
router.put("/:id", async (req, res) => {
  const user = await User.update(req.params.id, {
    username: req.body.username
  });

  res.send(user);
});

// delete user
router.delete("/:id", async (req, res) => {
  const deletedResult = await User.delete(req.params.id);
  res.send(deletedResult);
});
