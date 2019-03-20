// middleware
export const isAuthenticated = (req, res, next) => {
  if (!req.session.qid) {
    return res.send("Not Authenticated");
  }
  return next();
};
