const jwt = require('jsonwebtoken'); 
const UserRegister = require('../Models/Register/UserRegister');
const AuthMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token)
      return res.status(401).json({ error: "Access denied, token missing" });
    try {
      const verified = jwt.verify(token, "mySecret");
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).json(err.message);
    }
}

module.exports = AuthMiddleware;