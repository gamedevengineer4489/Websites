const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    // Auth data from user signed-in
    email: String,
    username: String,
    comment: String,
    submissionDate: String
})

module.exports = commentSchema;