const express = require('express');
const app = express();

// Endpoint to send 20 posts
app.get('/post', (req, res) => {
  // Simulating an array of 20 posts
  const posts = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Post ${index + 1}`,
    content: `This is the content of post ${index + 1}`,
  }));

  res.json(posts);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
