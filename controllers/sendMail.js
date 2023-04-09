const nodemailer = require('nodemailer');
require('dotenv').config()

module.exports = async (req, res) => {
    const config = {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    }
    const transporter = nodemailer.createTransport(config);
    const to = process.env.RECEIVER
    const { from, name, phone, subject, text } = req.body
    const data = { to, from, phone, name, subject, text };
    await transporter.sendMail(data, (err, info) => {
        if(err){
            console.log(err)
        } else {
            res.render('thankYou', {
                title: "Thank You for the message"
            })
            console.log(info.response)
        }
    })
}