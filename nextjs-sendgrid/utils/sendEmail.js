import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";

const sendEmail = async ({ name, email }) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "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",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email,
            },
          ],
          subject: "Demo success :)",
        },
      ],
      from: {
        email: "noreply@demo.com",
        name: "Test SendGrid",
      },
      content: [
        {
          type: "text/html",
          value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`,
        },
      ],
    }),
  });
};

export { sendEmail };
