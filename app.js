var express = require("express");

var app = express();

app.use("/static", express.static("public"));
app.set("view engine", "pug");

app.listen(3000, () => {
  console.log("the application is running on localhost:3000!");
});
