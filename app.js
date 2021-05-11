const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const routes = require("./routes");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use("/api", routes);
module.exports = app;
