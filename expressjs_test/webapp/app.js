const logger = require("@/logger")("app");
const express = require("express");
const app = express();
const db = require("@config/db");

const expressConfig = require("@config/express-config");
const expressRoutes = require("@config/express-routes");
const expressHandler = require("@config/express-handler");


// module.exports = app;

module.exports.createApp = async function() {
    logger.info('create app');
    expressConfig.setup(app);
    expressRoutes.setup(app, ["@web", "@api"]);
    expressHandler.setup(app);
    await db.connect();
    // console.log('app 끝');
    return app;
}
