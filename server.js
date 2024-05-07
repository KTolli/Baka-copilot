const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'karina.baka24@gmail.com',
            pass: 'Bakabaka24!'
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'karina.tolli@ut.ee',
        subject: 'New Form Submission',
        text: JSON.stringify(req.body)
    };

    let info = await transporter.sendMail(mailOptions);

    res.send('Aitäh, info on saadetud');
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});