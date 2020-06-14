const express = require("express");
const { projects } = require("./data.json");

const app = express();

// set static folder
app.use("/static", express.static("public"));
// set pug as view engine
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { projects });
});

app.get("/about", (req, res) => {
  res.render("about", { projects });
});

app.get("/project");

app.listen(3000, () => {
  console.log("the application is running on localhost:3000!");
});
