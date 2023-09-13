

const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('././src/routes/courseRoutes');

const app = express();
const port = 3300;

mongoose.connect('mongodb://127.0.0.1/Course').then(() => {
    console.log("You are connected")
}).catch((error) =>{
    console.log("Oops! You are not connected!", error)
})

app.use(express.json());
app.use('/course', courseRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})