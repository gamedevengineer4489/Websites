const mongoose = require('mongoose');
const { Schema } = mongoose;
const InputSchema = require('./Input');
const CommentSchema = require('./Comment');

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
    users: [InputSchema],
    comments: [CommentSchema]
});

mongoose.model('blogs', blogSchema);