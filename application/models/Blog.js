const mongoose = require('mongoose');
const { Schema } = mongoose;
const InputSchema = require('./Input');

const blogSchema = new Schema({
    userId: String,
    username: String,
    email: String,
    body: String,
    title: String,
    date_created: String,
    Id: String,
    likes: Number,
    dislikes: Number,
    users: [InputSchema]
});

mongoose.model('blogs', blogSchema);