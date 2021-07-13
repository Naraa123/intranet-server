const express = require("express");
const {
  getDeps,
  createDep,
  updateDep,
  deleteDep,
  selectDep,
} = require("../controller/dep");
const router = express.Router();

router.route("/").get(getDeps).post(createDep).put(updateDep).delete(deleteDep);

router.route("/:id").get(selectDep);
module.exports = router;
