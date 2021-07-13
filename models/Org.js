const Sequelize = require("sequelize");
const db = require("../config/database");

const Org = db.define("org", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: { args: [5, 75], msg: "Name-iin too baga eswel ih baina" },
    },
  },
  ceo_name: {
    type: Sequelize.STRING,
    validate: {
      len: { args: [2, 75], msg: "Ceo_name iin too baga eswel ih baina" },
    },
  },
});

module.exports = Org;
