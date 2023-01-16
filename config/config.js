require('dotenv').config();

module.exports = {
  "development": {
    //   "username": process.env.DB_USER || "root",
    //   "password": process.env.DB_PASS || "root",
    //   "database": process.env.DB_NAME || "todo",
    //   "host": process.env.DB_HOST || "127.0.0.1",
    "storage": "./database.sqlite3",
    "dialect": "sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}