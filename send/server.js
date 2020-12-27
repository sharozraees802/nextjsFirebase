// // 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

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(
//   "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"
// );

// const msg = {
//   to: "sharozkhan802@gmail.com",
//   from: "livanifyp802@gmail.com",
//   subject: "Test SendGrid Services",
//   text: "hello sharoz",
// };

// sgMail.send(msg, (err, info) => {
//   if (err) {
//     console.log("email not send", err);
//   } else {
//     console.log("email send");
//   }
// });

// const sendgridTransport = require("nodemailer-sendgrid-transport");
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       api_key:
//         "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",
//     },
//   })
// );

let QrUrl =
  "https://res.cloudinary.com/livanifyp/image/upload/v1607084509/60275942_2201239556625253_354955798356426752_o_r0iop9.jpg";
// transporter
//   .sendMail({
//     to: "sharozkhan802@gmail.com",
//     from: "livanifyp802@gmail.com",
//     subject: "Order Confirmation",
//     html: `
//     <p>Your Order is Confirmed 😃</p>
//     <h3>Yor QrCode Please Scan 😊</h3>
//     <br/>
//     <img src="${QrUrl}" alt="QrCode" width="275" height="250">
//     `,
//   })
//   .then((res) => console.log("send", res))
//   .catch((err) => console.log("error", err));

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

// const msg = {
//   to: "sharozkhan802@gmail.com",
//   from: "livanifyp802@gmail.com",
//   subject: "Test SendGrid Services",
//   text: "hello sharoz",
// };

// sgMail.send(msg, (err, info) => {
//   if (err) {
//     console.log("email not send", err);
//   } else {
//     console.log("email send");
//   }
// });

sgMail
  .send({
    to: "sharozkhan802@gmail.com",
    from: "livanifyp802@gmail.com",
    subject: "Order Confirmation",
    html: `
<p>Your Order is Confirmed 😃</p>

<img src="${QrUrl}" alt="QrCode" width="275" height="250">
`,
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
