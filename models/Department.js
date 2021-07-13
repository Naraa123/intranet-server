const Sequelize = require("sequelize");
const db = require("../config/database");

const Dep = db.define("dep", {
  name: {
    type: Sequelize.STRING(75),
    allowNull: false,
    validate: {
      notNull: {
        msg: "Name oruulna uu",
      },
    },
  },
  org: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Dep;
