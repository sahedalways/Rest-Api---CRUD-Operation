let users = require("../models/user.model");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const getUsers = (req, res) => {
  res.status(200).json({
    users,
  });
};

const createUsers = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };

  users.push(newUser);

  res.status(200).json({
    users,
  });
};

const updateUsers = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;

  users
    .filter((user) => user.id === userid)
    .map((selecteduser) => {
      selecteduser.username = username;
      selecteduser.email = email;
    });

  res.status(200).json({
    users,
  });
};

const deleteUsers = (req, res) => {
  const userid = req.params.id;

  users = users.filter((user) => user.id != userid);

  res.status(200).json({
    users,
  });
};

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
