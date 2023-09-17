const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const {upload} = require("../helper_functions/helper_functions")
const Course = require("../models/course");

router.post("/create", upload.single("file"), async (req, res) => {
    
    try {
      const {course, description, modules, duration, availability} = req.body
      console.log(req.file)
  
      const imageUrl = 'http://localhost:3300/images/' + req.file.filename 
     
      const courseInfo = new Course({
          course, description, modules, duration, availability, imageUrl
      });
  
      const savedCourse = await courseInfo.save();
      res.status(201).json(savedCourse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);

router.put("/:id", courseController.updateByObjectId);

router.delete("/:id", courseController.applyDelete);

router.delete("/remove", courseController.applyRemoveAll);

module.exports = router;
