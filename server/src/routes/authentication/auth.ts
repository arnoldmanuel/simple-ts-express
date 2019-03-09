import * as bcrypt from "bcryptjs";
import * as express from "express";
import { User } from "../../entity/User";
export const router = express.Router();

// login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    res.send("wrong email or password");
    return;
  }

  const id = await bcrypt.hash(String(user.id), 12);
  req.session.qid = id;

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    res.send("wrong email or password");
    return;
  }

  res.send(req.session);
});

// register user
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = User.create({
    username,
    email,
    password: hashedPassword
  });

  await user.save();

  res.send(user);
});
