const jwt = require("jsonwebtoken");
require("dotenv").config();

const sign = process.env.JWT_SECRET;

console.log(sign, "sign");

module.exports = {
  generate(data) {
    return jwt.sign(data, sign, { expiresIn: "30d" });
  },
  verify(token) {
    return jwt.verify(token, sign);
  },
};
