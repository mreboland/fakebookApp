const Post = require('./post-model');

module.exports = {
  listPosts: (req, res, next) => {
    Post.find()
    // lower case user because we are referencing user in post-model and not from user-model
    // populate adds info that is associated with the model so instead of just the unique id it'll give us the user name as well
    .populate("user comments.user").exec()
    .then(records => res.send(records))
    .catch(next)
  }
}