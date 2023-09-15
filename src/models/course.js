const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    course: {type: String, required: true},
    modules: {type: String, required: true},
    duration: {type: String, required: true},
    image: { type: String, required: true },
});

module.exports = mongoose.model('course', courseSchema);

