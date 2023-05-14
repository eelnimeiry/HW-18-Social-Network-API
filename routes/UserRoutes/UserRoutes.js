const router = require("express").Router();

const {
  GetUsers,
  GetUserById,
  CreateUsers,
  UpdateUser,
  DeleteUsers,
  AddFrient,
  RemoveFrient,
} = require("../../controllers/UserControllers/UserControllers");

// Set up GET all and POST at /api/users
router.route("/").get(GetUsers).post(CreateUsers);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(GetUserById).put(UpdateUser).delete(DeleteUsers);

// Add and delete a friend
router.route("/:id/friends/:friendsId").post(AddFrient).delete(RemoveFrient);

module.exports = router;
