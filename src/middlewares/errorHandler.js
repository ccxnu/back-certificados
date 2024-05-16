export const createError = (message, code) => {
  const error = new Error(message);
  error.code = code;
  return error;
};

export const createThrowError = (message, code) => {
  const error = createError(message, code);
  throw error;
};

export const ErrorHandler = (err, req, res, next) => {
  if (err) {
    res.status(err.code || 500).json({
      message: err.message || "Internal Server Error",
    });
  }
};
