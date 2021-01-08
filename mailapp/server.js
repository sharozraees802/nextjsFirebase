const express = require("express");
const next = require("next");
const mail = require("./server/routes/mail.routes");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const port = 3000;

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.use(mail);

  // server.get("*", (req, res) => {
  //   return handle(req, res);
  // });

  server.get("*", (req, res) => {
    if (req.url.includes("http:localhost:3000/sw.js")) {
      const filePath = path.join(__dirname, "static", "workbox", "sw.js");
      app.serveStatic(req, res, filePath);
    } else if (req.url.startsWith("static/workbox/")) {
      app.serveStatic(req, res, path.join(__dirname, req.url));
    } else {
      handle(req, res, req.url);
    }
  });

  server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
