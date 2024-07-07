// app.js

// Require necessary modules
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (if needed)
app.use(express.static('public'));

// Handle POST request to /send-email endpoint
app.post('/send-email', (req, res) => {
  // Extract form data from request body
  const { name, email, phone, message } = req.body;

  // Create a Nodemailer transporter using Gmail SMTP
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '30pluss30@gmail.com', // Your Gmail email address
      pass: '8802177281_V' // Your Gmail password or app-specific password
    }
  });

  // Setup email data
  let mailOptions = {
    from: 'your-email@gmail.com', // Sender address (must be your Gmail email)
    to: 'recipient-email@example.com', // Receiver email address
    subject: 'New Contact Form Submission',
    html: `
      <h3>Contact Details:</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
