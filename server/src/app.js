const express = require("express");
const cors = require("cors");
const app = express();
const imageRouter = require("./routes/imageRouter");
app.use(express.json());
app.use(cors());
app.use("/img", imageRouter);
module.exports = app;
