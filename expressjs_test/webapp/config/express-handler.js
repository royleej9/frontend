const logger = require("@/logger")("app");
const createError = require("http-errors");
exports.setup = function (app) {
  logger.info("Setup express-handler");

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    console.log(err);
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
};
