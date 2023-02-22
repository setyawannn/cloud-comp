const mySql = require("mysql")

const db = mySql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cloud_api"
})

exports.db = db;