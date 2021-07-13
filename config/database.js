const Sequelize = require("sequelize");

module.exports = new Sequelize("intranet", "postgres", "0910", {
  host: "localhost",
  dialect: "postgres",
  user: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
