const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    throw new BadRequestError("Please  provide email and passowrd");
  }

  // try to keep payload small, better experience for user
  const token = jwt.sign({ name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  res.status(200).json({ token });
};

const hello = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.name}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { logon, hello };
