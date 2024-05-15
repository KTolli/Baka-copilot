const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

const app = express();


// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// APIKEY on koodist eemaldatud GitHub repositooriumi avalikustamise tõttu 
sgMail.setApiKey('');

app.get("/", (req, res) => res.send("Express on Vercel"));
app.post('/send-email', (req, res) => {
  console.log(req.body); // Log the request body

  const { name, email, message } = req.body;

  const msg = {
    to: 'karina.baka24@gmail.com', // fixed recipient email
    from: 'karina.baka24@gmail.com', // fixed sender email
    subject: `New message from ${name} (${email})`, // include the name and email in the subject
    text: `Saatja nimi: ${name}\nSaatja email: ${email}\nSaatja sõnum: ${message}`, // include the name, email, and message in the text
    html: `<p>Saatja nimi: ${name}<br>Saatja email: ${email}<br>Saatja sõnum: ${message}</p>`, // include the name, email, and message in the html
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
      res.json({ message: 'Email sent' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error sending email');
    });
});

app.listen(4000, () => console.log('Server is running on port 4000'));
module.exports = app;