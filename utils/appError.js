module.exports = class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    // To not pollute the stack trace by AppError class func
    Error.captureStackTrace(this, this.constructor);
  }
};
