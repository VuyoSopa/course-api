const res = require('express/lib/response');
const Course = require('../models/course');
const req = require('express/lib/request');
const course = require('../models/course');

//creates new course.
exports.createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        const savedCourse = await course.save();
        res.status(201).json(savedCourse);

    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

//when called, it displays pretty much all the data in the database.
exports.getAllCourses = async (req, res) => {
try {
    const courses = await Course.find();
    res.status(200).json(courses);
} catch (error) {
    res.status(500).json({ error: error.message });
}
};

//updates info by first specifying ObjectId of the data already captured 
exports.updatebyObjectId =  async(req, res) => {
        
    try {
        const course =  await Course.findByIdAndUpdate(req.params.id, req.body) 

        res.status(201).json("Changes made successfully");
      } catch (error) {
          res.status(500).json({error: error.message})
    }
}

//create delete function to remove info admin wishes to remove
exports.applyDelete = async(req, res) => {
    try {
        const result = await Course.findByIdAndRemove(req.params.id)
        res.status(201).json("Deleted successfully!");
    } catch (error) {
        res.status(201).json({error: error.message})
    }
}

//removes all the data from the collection
exports.applyRemoveAll = async(req, res) =>{
    try {
        const course = await Course.deleteMany({ }, req.body);
        res.status(201).json("Removed all data!")
    } catch (catcherr) {
        res.status(404).json({ catcherr: catcherr.message })
    }
}