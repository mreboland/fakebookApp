// copied from notes Relationships between models in Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String
});

module.exports = mongoose.model('User', UserSchema);