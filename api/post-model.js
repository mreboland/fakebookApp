const mongoose = require('mongoose');

//  Because user-model not used anywhere else, must be required somewhere
const User = require("./user-model");

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  body: String,
});

// Create an array of subdocument on the comments property
const PostSchema = new mongoose.Schema({
  user: {
    // have to use mongoose.Schema as schema isn't destructured at the top of the file.
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  body: String,
  comments: [commentSchema]
});

module.exports = mongoose.model('Post', PostSchema);