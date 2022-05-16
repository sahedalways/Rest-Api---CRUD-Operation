const router = require("express").Router();
const {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/user.controller");
const users = require("../models/user.model");

router.get("/", getUsers);
router.post("/", createUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
