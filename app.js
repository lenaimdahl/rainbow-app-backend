require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const activitiesRoutes = require("./routes/activities.routes");
app.use("/api", activitiesRoutes);

require("./error-handling")(app);

module.exports = app;
