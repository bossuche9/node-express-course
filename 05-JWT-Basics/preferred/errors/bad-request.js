const CustomAPIError = require("./custom-errors");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends CustomAPIError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
