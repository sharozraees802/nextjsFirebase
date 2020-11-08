const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const user = "";
const pass = "";

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
      html: `<p>${req.body.messege}</p>`,
    })
    .then((res) => console.log("success", res))
    .catch((err) => console.log("error", err));
});

module.exports = router;
