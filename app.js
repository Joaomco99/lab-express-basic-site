const express = require('express');
const app = express();
const path = require('path');

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/about', (req, res) => {
  res.render('about.html');
});

app.get('/trophies', (req, res) => {
  res.render('trophies.html');
});

app.get('/gallery', (req, res) => {
  res.render('gallery.html');
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
