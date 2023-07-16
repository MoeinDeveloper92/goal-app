//middleware is a function thath execute during req and res cycle
//i want to have a funtion to over write the default express error handler
const errorHandler = (err, req, res, next) => {
  //i want to get the stasu code which is set in the controller
  // if it no set we set it to 500
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    //if we are not in production mode show err.stack which the line of the rror
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = errorHandler;
