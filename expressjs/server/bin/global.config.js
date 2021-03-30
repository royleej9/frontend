const logger = require("./logger")("app");

function loadEnv() {
    const enbLoadResult = require("dotenv").config();
    if (enbLoadResult.error) {
        logger.error("Can not load .env file");
        throw enbLoadResult.error;
    }
}

function setupAlias() {
    require("module-alias/register");
    const moduleAlias = require("module-alias");
    const aliases = require("./aliases.config");
    moduleAlias.addAliases(aliases.aliasFullPath);
}


module.exports.setup = function() {
    logger.info("Setup global config");
    logger.info('>>> load env');
    loadEnv();
    logger.info('>>> set alias');
    setupAlias();
}

// module.exports.loadEnv = loadEnv;