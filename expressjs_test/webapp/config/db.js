// Connector/Node.js Callback API - mysql 호환
// https://mariadb.com/kb/en/connector-nodejs-callback-api/
// const mariadb = require('mariadb/callback');

// Connector / Node.js Promise API
const mariadb = require("mariadb");
const logger = require("@/logger")("app");

let pool = null;

function createPool() {
  console.log(">>> creating pool....");
  pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectTimeout: process.env.DB_CONNECT_TIMEOUT,
    connectionLimit: process.env.DB_CONNECTION_LIMIT
  });
  console.log(">>> createed pool....");
}

async function testConnectDB() {
  try {
    logger.info(">>> connecting to db...");
    const conn = await pool.getConnection();
    conn.release();
    logger.info(">>> Successfully connected to db");
  } catch (e) {
    logger.error(">>> Failed to connected to db");
    throw e;
  }
}


const getConnectionFn = async function() {

};


exports.connect =  async function() {
  logger.info('connect db')
  createPool();
  await testConnectDB();
};

exports.getConnection = getConnectionFn;
