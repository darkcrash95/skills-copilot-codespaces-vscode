// Create web server with express
// Create a route for POST /comments
// Parse incoming JSON data
// Create a comment object and add it to the comments array
// Send a response with the comment object and a 201 status code

const express = require('express');
const app = express();
const PORT = 4001;

const comments = [];

app.use(express.static('public'));

app.use(express.json());

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});