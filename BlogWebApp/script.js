  // Fetch data from the API and display it in the UI
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const blogList = document.getElementById('blog-list');

    posts.forEach(post => {
      const blogItem = document.createElement('li');
      blogItem.classList.add('blog-item');
      blogItem.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button onclick="deleteBlog(${post.id})">Delete</button>
      `;
      blogList.appendChild(blogItem);
    });
  });

// Function to add a new blog post
function addBlog(event) {
  event.preventDefault();

  const blogTitle = document.getElementById('blog-title').value;
  const blogContent = document.getElementById('blog-content').value;

  const blogItem = document.createElement('li');
  blogItem.classList.add('blog-item');
  blogItem.innerHTML = `
    <h3>${blogTitle}</h3>
    <p>${blogContent}</p>
    <button onclick="deleteBlog(0)">Delete</button>
  `;

  document.getElementById('blog-list').appendChild(blogItem);

  document.getElementById('add-blog-form').reset();
}

// Function to delete a blog post
function deleteBlog(blogId) {
  const blogItem = document.querySelector(`[data-id="${blogId}"]`);
  if (blogItem) {
    blogItem.remove();
  }
}

// Add event listener to the form submission
document.getElementById('add-blog-form').addEventListener('submit', addBlog);