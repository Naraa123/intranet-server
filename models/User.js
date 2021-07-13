const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: { args: [4, 75], msg: "User name buruu baina." },
      notNull: {
        msg: "Please enter your name",
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: { args: [8, 30], msg: "password aldaatai baina" },
    },
  },
  status: {
    type: Sequelize.STRING(75),
  },
});

module.exports = User;
