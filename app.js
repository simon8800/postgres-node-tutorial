const path = require("path");
const express = require("express");
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
} = require("./controllers/usersController.js");
const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", getUsernames);

app.get("/new", createUsernameGet);

app.post("/new", createUsernamePost);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
