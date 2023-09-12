const res = require('express/lib/response');
const Course = require('../models/book');
const req = require('express/lib/request');
const course = require('../models/book');

exports.createCourse = async (req, res) => {
    try {
        const course = new course(req.body);
        const savedCourse = await course.save();
        res.status(201).json(savedBook);

    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};