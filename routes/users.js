const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  selectUser,
} = require("../controller/user");
const router = express.Router();

router
  .route("/")
  .get(getUsers)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/:id").get(selectUser);
module.exports = router;
