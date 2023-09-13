const res = require('express/lib/response');
const Course = require('../models/course');
const req = require('express/lib/request');
const course = require('../models/course');

exports.createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        const savedCourse = await course.save();
        res.status(201).json(savedCourse);

    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

exports.getAllCourses = async (req, res) => {
try {
    const courses = await Course.find();
    res.status(200).json(courses);
} catch (error) {
    res.status(500).json({ error: error.message });
}
};

exports.getCourseById = async (req, res) => {
    const id = req.params.id

    try{
        const courses = await Course.findById(id);
        res.status(200).json(courses);
    }catch (error) {
        res.status(500).json({ error: error.message})
    }
    }
