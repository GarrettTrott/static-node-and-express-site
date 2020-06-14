const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

// get home route
router.get("/", (req, res) => {
  res.render("index", { projects });
});

// get about route
router.get("/about", (req, res) => {
  res.render("about", { projects });
});

// get project/id route
router.get("/project/:id", (req, res) => {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
  res.render("project", { project });
});

module.exports = router;
