const express = require("express");
const {
  getEmps,
  createEmp,
  updateEmp,
  deleteEmp,
  selectEmp,
} = require("../controller/emp");
const router = express.Router();

router.route("/").get(getEmps).post(createEmp).put(updateEmp).delete(deleteEmp);

router.route("/:id").get(selectEmp);
module.exports = router;
