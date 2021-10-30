const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    email: String,
    username: String,
    comment: String,
    submissionDate: String
})

mongoose.model('comments', commentSchema);