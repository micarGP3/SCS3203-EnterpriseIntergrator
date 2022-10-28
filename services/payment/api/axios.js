const axios = require("axios");
const { BASE_URL } = require("../helpers/urls");

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});
module.exports = axiosPrivate;
