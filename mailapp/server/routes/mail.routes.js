const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const user = "instaminiheroku@gmail.com";
const pass = "instaminiheroku007";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

router.post("/api/mail", (req, res) => {
  transporter
    .sendMail({
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.messege,
      html: "<h1>welcome To NodeMailer Check</h1>",
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

module.exports = router;