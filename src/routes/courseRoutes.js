const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const {upload} = require("../helper_functions/helper_functions")
const Course = require("../models/course");

router.post("/create", upload.single("file"), courseController.createCourse);

router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);

router.put("/:id", courseController.updateByObjectId);

router.delete("/:id", courseController.applyDelete);

router.delete("/remove", courseController.applyRemoveAll);

module.exports = router;
