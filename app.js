const express = require("express");
const mainRoutes = require("./routes");
const app = express();

// set static folder
app.use("/static", express.static("public"));

// set pug as view engine
app.set("view engine", "pug");

// routing middleware
app.use(mainRoutes);

// error handling
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  console.log(err);
  res.render("error", err);
});

// listen and log port
app.listen(3000, () => {
  console.log("the application is running on localhost:3000!");
});
