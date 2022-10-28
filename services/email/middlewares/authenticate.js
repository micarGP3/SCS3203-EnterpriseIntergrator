const { response } = require("express");
const axiosPrivate = require("../api/axios");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    const response = await axiosPrivate.post(
      "/verify",
      {},
      {
        headers: {
          Authorization: authHeader,
          "Content-type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      next();
      return;
    }
    res.sendStatus(403);
  } catch (err) {
    console.log(response);
    res.sendStatus(403);
  }
};

module.exports = authenticate;
