import * as express from "express";
import { User } from "../../entity/User";
import { isAuthenticated } from "../../middleware/isAuthenticated";
export const router = express.Router();

// protected rout
router.get("/profile", isAuthenticated, async (req, res) => {
  const userId = req.session.qid;
  const user = await User.findOne({ id: userId });
  console.log(user);
  res.send("Profile");
});
