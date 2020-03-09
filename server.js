const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const parser = require('body-parser');
const { posts } = require('./endpoints');
const { authenticate } = require('./middlewares')

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))
// parse application/json
app.use(parser.json())


const postsHandlers = posts({ axios })

app.post('/', authenticate, postsHandlers.post);

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;