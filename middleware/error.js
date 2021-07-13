const errorHandler = (err, req, res, next) => {
  const error = { ...err };

  error.message = err.message;

  res.status(500).json({
    success: false,
    error,
  });
};
module.exports = errorHandler;
