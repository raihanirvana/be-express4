/* eslint-disable no-unused-vars */
const errorMiddleware = (error, request, response, next) => {
  response.status(error.statusCode || 500).json({ message: error.message });
};

export default errorMiddleware;
