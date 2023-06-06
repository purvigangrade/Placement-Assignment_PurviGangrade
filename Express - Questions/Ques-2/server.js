// Example middleware to check authentication
const isAuthenticated = (req, res, next) => {
  // Check if user is authenticated (implement your authentication logic here)
  const isUserAuthenticated = /* Implement your authentication check logic */ true;

  if (isUserAuthenticated) {
    // User is authenticated, continue to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, send an unauthorized response
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Endpoint to send data of a post
app.get('/post', isAuthenticated, (req, res) => {
  // Data of the post
  const post = {
    id: 1,
    title: 'Example Post',
    content: 'This is an example post.',
  };

  res.json(post);
});