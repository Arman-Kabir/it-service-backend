class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string | undefined, stack = "") {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  // next();
}

export default ApiError;
// export const ApiError;
