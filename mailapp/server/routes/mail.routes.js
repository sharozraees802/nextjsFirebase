const express = require("express");
const nodemailer = require("nodemailer");
// const { USER, PASS, HOST, MAILPORT, SERVICE } = require("../../config/key");

const router = express.Router();

// const user = "instaminiheroku@gmail.com";
// const pass = "instaminiheroku007";

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   service: "gmail",
//   auth: {
//     user,
//     pass,
//   },
// });

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.MAILPORT,
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// const transporter = nodemailer.createTransport({
//   host: HOST,
//   port: MAILPORT,
//   service: SERVICE,
//   auth: {
//     user: USER,
//     pass: PASS,
//   },
// });

router.post("/api/mail", (req, res) => {
  console.log(
    req.body.email,
    req.body.subject,
    req.body.messege,
    process.env.HOST,
    process.env.MAILPORT,
    process.env.SERVICE,
    process.env.USER,
    process.env.PASS
  );

  transporter
    .sendMail({
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.messege,
      html: `<p>${req.body.messege}</p>`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

module.exports = router;
