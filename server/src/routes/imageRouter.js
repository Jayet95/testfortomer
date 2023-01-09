const express = require("express");
const router = express.Router();
imageController = require("../controllers/ImageControllers");
router.get("/all", imageController.all);
router.post("/create", imageController.create);
router.delete("/delete", imageController.delete);

module.exports = router;
