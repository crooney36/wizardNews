const express = require("express");
const app = express();
const morgan = require("morgan");
const postBank = require("./postBank");

app.get("/", (req, res) => {
  const posts = postBank.list();
  const html = `<!DOCTYPE html>
  <html>
  <head>
  </head>
  <body>
  <ul>
  ${posts.map((post) => `<li>${post.title}</li>`)}
  </ul>
  </body>
  </html>
  `;
  res.send(html);
});

const PORT = 1337;
app.use(morgan("dev"));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
