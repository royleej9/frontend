const logger = require("@/logger")("app");
const fs = require("fs");
const path = require("path");
const { aliasFullPath } = require("@/aliases.config");

function scanRouter(app, dirPath) {
  const files = fs.readdirSync(dirPath);
  files.forEach(function (file) {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      scanRouter(app, filePath);
    } else {
      if (path.extname(filePath) === ".js") {
        const module = require(filePath);
        if (
          module["router"] !== undefined &&
          module["requestURI"] !== undefined
        ) {
          app.use(module.requestURI, module.router);
          logger.info(`>>> added router: ${module["requestURI"]}`);
        }
      }
    }
  });
}

exports.setup = function (app, dirAlias) {
  logger.info("Setup express-router");
  dirAlias.forEach((alias) => {
    scanRouter(app, aliasFullPath[alias]);
  });
  // app.use("/", home);
  // // API
  // app.use("/api/sample", sampleRouter);
};
