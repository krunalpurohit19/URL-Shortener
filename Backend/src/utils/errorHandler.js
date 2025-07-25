export const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "False",
      message: err.message,
    });
  }
  console.error(err);
  res.status(500).send({
    status: "error",
    message: err.message || "Internal Server Error",
  });
};

export class AppError extends Error {
  statusCode;
  isOperational;

  constructor(message, statusCode = 500, isOperation = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperation;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, 404);
  }
}

export class ConflictError extends AppError {
  constructor(message = "Conflict occurred") {
    super(message, 409);
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Bad request") {
    super(message, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized access") {
    super(message, 401);
  }
}
