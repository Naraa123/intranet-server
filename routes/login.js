const express = require("express");
const { login } = require("../controller/user");
const router = express.Router();

router.route("/").post(login);

module.exports = router;
