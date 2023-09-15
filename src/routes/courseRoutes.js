const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.post('/create', courseController.createCourse);

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);

router.put('/:id', courseController.updatebyObjectId);


router.delete('/:id', courseController.applyDelete);

router.delete('/remove', courseController.applyRemoveAll);


module.exports = router;