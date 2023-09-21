require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

const { isAuthenticated } = require("./middlewares/jwt.auth");

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const activitiesRoutes = require("./routes/activities.routes");
app.use("/api", activitiesRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/api", userRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

require("./error-handling")(app);

module.exports = app;
