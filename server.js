const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/fakebook', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const posts = require('./api/post-controller');

app.get('/api/posts', posts.listPosts);

// This serves all files placed in the /public
// directory (where gulp will build all React code)
app.use(express.static('build'));

// This route serves your index.html file (which
// initializes React)
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Start your server, and listen on port 8080.
app.listen(8080, function() {
  console.log("App is now listening on port 8080!");
})
