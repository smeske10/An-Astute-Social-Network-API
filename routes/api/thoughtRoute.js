const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController");

router.route("/thought").get(getThoughts).post(createThought);

router
  .route("/thought/:ThoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .update(updateThought);

router.route("/thought/create").post(createThought);

module.exports = router;
