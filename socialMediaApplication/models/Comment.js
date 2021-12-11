const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    username: String,
    comment: String,
    submissionDate: String,
    editDate: String,
    profileImage: String
})

module.exports = commentSchema;