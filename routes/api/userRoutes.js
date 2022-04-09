const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require("../../controllers/userController.js");

// /api/Users
router.route("/users").get(getUsers);

// /api/Users/:UserId
router
  .route("/users/:userId")
  .get(getSingleUser)
  .post(createUser)
  .delete(deleteUser);

module.exports = router;
