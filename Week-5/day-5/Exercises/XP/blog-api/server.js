const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


let posts = [
  { id: 1, title: 'First Post', content: 'This is my first blog post!' },
  { id: 2, title: 'Second Post', content: 'Another post for my blog.' }
];



app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.status(200).json(post);
});



app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  const newPost = {
    id: posts.length + 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  post.title = title;
  post.content = content;
  res.status(200).json(post);
});

app.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }
  posts.splice(postIndex, 1);
  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});