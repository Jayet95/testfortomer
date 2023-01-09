const express = require("express");
const app = express();
const imageRouter = require("./routes/imageRouter");
app.use(express.json());
app.use("/img", imageRouter);
module.exports = app;
