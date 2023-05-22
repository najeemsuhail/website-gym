const fs = require('fs');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/gallery', (req, res) => {
    const gallery = JSON.parse(fs.readFileSync('data/gallery_images.json'));
    res.render('gallery', { gallery });
});

app.get('/plans', (req, res) => {
    const plans = JSON.parse(fs.readFileSync('data/plans.json'));
    res.render('plans', { plans });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/contact', (req, res) => {
  // Access form data using req.body
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Process the form data (e.g., send an email, store in database, etc.)

  res.send('Thank you for contacting us!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
