const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/user.route");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", router);

//home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//route error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Result Not Found!",
  });
});

//server error
app.use((req, res, next) => {
  res.status(500).json({
    message: "Something Went Wrong!",
  });
});

module.exports = app;
