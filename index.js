const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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


app.post("/contactus", (req, res) => {
  // Get the form data
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Send an email to the recipient
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "suhail.najeem@gmail.com",
      pass: "",
    },
  });

  transporter.sendMail({
    from: "suhail.najeem@gmail.com",
    to: "suhail.najeem@gmail.com",
    subject: "Contact Form Submission",
    text: `
      From: ${name}
      Email: ${email}
      Message: ${message}
    `,
  });

  // Send a success message back to the client
  res.send("Your message has been sent!");
});




app.listen(3000, () => {
  console.log('Server started on port 3000');
});
