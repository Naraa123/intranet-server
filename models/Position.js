const Sequelize = require("sequelize");
const db = require("../config/database");

const Pos = db.define("position", {
  name: {
    type: Sequelize.STRING,
    validate: {
      len: { args: [3, 75], msg: "Name-iin too baga eswel ih baina" },
    },
  },
});

module.exports = Pos;
