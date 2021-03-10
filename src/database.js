const mysql = require("mysql");
const { promisify } = require("util");
const { database } = require("./keys");

const pool = mysql.createPool(database);
pool.getConnection((err, connection) => {
  if (connection) connection.release();
  console.log('Database is Connected');
  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;