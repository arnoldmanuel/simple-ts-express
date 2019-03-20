import * as express from "express";
export const router = express.Router();

// middleware
const isAuthenticated = (req, res, next) => {
  if (!req.session.qid) {
    return res.send("Not Authenticated");
  }
  return next();
};

// protected rout
router.get("/profile", isAuthenticated, (req, res) => {
  res.send("Profile");
});
