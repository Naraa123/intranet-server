const Sequelize = require("sequelize");
const db = require("../config/database");

const Emp = db.define("emp", {
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: { args: [2, 75], msg: "Name-iin too baga eswel ih baina" },
    },
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: { args: [2, 75], msg: "Name-iin too baga eswel ih baina" },
    },
  },
  department: {
    type: Sequelize.INTEGER,
  },
  position: {
    type: Sequelize.INTEGER,
  },
  registr: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: { args: [4, 6], msg: "utga buruu baina" },
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: { args: [8, 12], msg: "phone number zuw oruulna uu.. " },
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: { args: [13, 40], msg: "email-iin too baga eswel ih baina" },
    },
  },
});

module.exports = Emp;
