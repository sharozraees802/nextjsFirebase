const express = require("express");
const next = require("next");
const mail = require("./server/routes/mail.routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const port = 3000;

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.use(mail);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
