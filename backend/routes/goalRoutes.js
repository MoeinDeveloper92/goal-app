const express = require("express");
const {
  getGoals,
  deleteGoal,
  updateGoal,
  createGoals,
} = require("../controller/goalController");

const route = express.Router();

route.route("/").get(getGoals).post(createGoals);

route.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = route;
