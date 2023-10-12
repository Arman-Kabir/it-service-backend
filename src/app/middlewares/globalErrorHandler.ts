import { ErrorRequestHandler } from "express";
import { IGenericErrorMessage } from "../../interfaces/error";
import config from "../../config";
import handleValidationError from "../../errors/handleValidationError";
import ApiError from "../../errors/ApiError";
import handleCastError from "../../errors/handleCastError";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = "Somethiong went wrong";
  let errorMessages: IGenericErrorMessage[] = [];

  //Validation Error
  if (error?.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  //CastError
  else if (error?.name === "CastError") {
    // res.status(200).json({error});
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  //apiError message
  else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message: error.message;
    errorMessages: error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }

  // error message
  else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }
  // console.log(err);
  // if (err instanceof Error) {
  //   res.status(400).json({ error: err });
  // }
  //  else {
  //   res.status(500).json({ error: "Something went wrong" });
  // }
  // next();
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? error?.stack : undefined,
    // error:err,
  });
  next();
};

export default globalErrorHandler;
