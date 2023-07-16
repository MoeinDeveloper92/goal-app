const asyncHandler = require("express-async-handler");

//@desc    Get goals
//@route   GET /api/goals
//@acces   private

exports.getGoals = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Get Goals",
  });
});

//@desc    create goals
//@route   POST /api/goals
//@access  private

exports.createGoals = asyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    //this is going to be a client error
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({
    message: "Create Goals",
  });
});

//@desc   update goals
//@route  UPDATE /api/goals/:id
//@acces   Pricate

exports.updateGoal = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: `update goal ${req.params.id}`,
  });
});

//@desc   delete Goals
//@route  DELETE /api/goals/:id
//@access Private

exports.deleteGoal = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: `Delete goal ${req.params.id}`,
  });
});
