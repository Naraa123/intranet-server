const express = require("express");
const {
  getPositions,
  createPos,
  updatePos,
  deletePos,
  selectPos,
} = require("../controller/pos");
const router = express.Router();

router
  .route("/")
  .get(getPositions)
  .post(createPos)
  .put(updatePos)
  .delete(deletePos);

router.route("/:id").get(selectPos);
module.exports = router;
