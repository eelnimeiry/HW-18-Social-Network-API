const router = require("express").Router();

const {
  GetThoughts,
  GetThoughtById,
  CreateThoughts,
  UpdateThoughts,
  DeleteThoughts,
  AddReactions,
  DeleteReactions,
} = require("../../controllers/ThoughtControllers/ThoughtControllers");

// Set up GET all and POST at /api/thoughts
router.route("/").get(GetThoughts).post(CreateThoughts);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route("/:id")
  .get(GetThoughtById)
  .put(UpdateThoughts)
  .delete(DeleteThoughts);

// router.route("/:thoughtId/reactions").post(AddReactions);
router.route("/:thoughtId/reactions/:reactionId").delete(DeleteReactions);
router.route("/:thoughtId/reactions").post(AddReactions);

module.exports = router;
