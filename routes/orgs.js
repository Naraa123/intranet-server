const express = require("express");
const {
  getOrgs,
  createOrg,
  updateOrg,
  deleteOrg,
  selectOrg,
} = require("../controller/org");
const router = express.Router();

router.route("/").get(getOrgs).post(createOrg).put(updateOrg).delete(deleteOrg);

router.route("/:id").get(selectOrg);
module.exports = router;
