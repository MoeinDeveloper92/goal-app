const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("../backend/middleware/errorMiddleware");
const goalRoutes = require("../backend/routes/goalRoutes");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
//bellow function will over write the default express error handler
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
