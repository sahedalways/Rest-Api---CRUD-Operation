const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Sahed Ahmed",
    email: "ssahed65@gmail.com",
  },

  {
    id: uuidv4(),
    username: "Zahid Hossen",
    email: "ssahed65@gmail.com",
  },
];

module.exports = users;
