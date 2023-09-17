const Course = require("../models/course");

// exports.createCourse = async (req, res) => {

//   try {
//     const {course, description, modules, duration, availability} = req.body
//     console.log(req.file)
//     const imagePath = req.body.imageUrl.split('\\')[2]
//     const imageUrl = 'http://localhost:3300/' + imagePath
   
//     const courseInfo = new Course({
//         course, description, modules, duration, availability, imageUrl
//     });

//     const savedCourse = await courseInfo.save();
//     res.status(201).json(savedCourse);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.getAllCourses = async (_req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCourseById = async (req, res) => {
  const id = req.params.id;

  try {
    const courses = await Course.findById(id);
    if (!courses) {
      return res.status(404).json("the course does not exist");
    }

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateByObjectId = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body);

    res.status(201).json("Changes made successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.applyDelete = async (req, res) => {
  try {
    const result = await Course.findByIdAndRemove(req.params.id);
    res.status(201).json("Deleted successfully!");
  } catch (error) {
    res.status(201).json({ error: error.message });
  }
};

exports.applyRemoveAll = async (req, res) => {
  try {
    const course = await Course.deleteMany({}, req.body);
    res.status(201).json("Removed all data!");
  } catch (catcherr) {
    res.status(404).json({ catcherr: catcherr.message });
  }
};
