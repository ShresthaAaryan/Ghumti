const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ghumti36@gmail.com',
    pass: 'kdzo bpbg ohat nqht',
  },
});

app.post('/send-email', (req, res) => {
  const { type } = req.body;

  switch (type) {
    case 'order':
      handleOrderInquiry(req.body, res);
      break;
    default:
      handleGeneralInquiry(req.body, res);
  }
});

function handleGeneralInquiry(formData, res) {
  const { name, contact, email, message } = formData;

  const mailOptions = {
    from: email,
    to: 'ghumti.au@gmail.com, ghumtikitchen777@gmail.com',
    subject: 'General Feedback',
    text: `Name: ${name}\nContact: ${contact}\nEmail: ${email}\nMessage: ${message}`,
  };

  sendEmail(mailOptions, res);
}

function handleOrderInquiry(formData, res) {
  const { orderSize, arrivalTime, arrivalDate, numberOfPeople, otherDetails, email, phoneNumber } = formData;

  const mailOptions = {
    from: 'shresthaaaryan123@gmail.com',
    to: 'shresthaaaryan123@gmail.com',
    subject: 'New Order Inquiry',
    text: `Order Size: ${orderSize}\nArrival Time: ${arrivalTime}\nArrival Date: ${arrivalDate}\nNumber of People: ${numberOfPeople}\nOther Details: ${otherDetails}\nEmail: ${email}\nPhone Number: +61-${phoneNumber}`,
  };

  sendEmail(mailOptions, res);
}

function sendEmail(mailOptions, res) {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal server error');
    } else {
      console.log('Email sent successfully:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
