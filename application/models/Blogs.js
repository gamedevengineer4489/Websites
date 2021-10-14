const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogsSchema = new Schema({
    blogs: []
});

mongoose.model('blogs', blogsSchema);