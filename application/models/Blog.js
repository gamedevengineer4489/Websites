const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    userId: String,
    username: String,
    email: String,
    body: String,
    title: String,
    date_created: String,
    Id: String
});

mongoose.model('blogs', blogSchema);