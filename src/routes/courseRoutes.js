

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.post('/create', courseController.createCourse);

router.get('/', courseController.getAllCourses);

router.put('/:id', courseController.updatebyObjectId);

//remove by _id: ObjectId(), but before the removing of data us applied data belonging top specified
// id: is shown and removed at the same time
//router.delete('/:id', courseController.applyDelete);

router.delete('/remove', courseController.applyRemoveAll);

//translated to module
module.exports = router;