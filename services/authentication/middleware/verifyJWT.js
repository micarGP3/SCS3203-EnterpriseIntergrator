const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = header.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    decoded = decoded;
    req.body.uID = decoded.UserInfo.uID;
    req.body.roles = decoded.aud;
    res.sendStatus(200);
  });
};

module.exports = verifyJWT;
