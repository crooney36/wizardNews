const express = require("express");
const app = express();
const morgan = require("morgan");
const postBank = require("./postBank");
const postList = require("./postList")
const postDetails = require("./postDetails")
const timeAgo = require("node-time-ago");



app.get("/", (req, res) => {
  const posts = postBank.list();
  res.send(postList(posts));
});

//single post view:
app.get("/posts/:id", (req, res, next) => {
  const id = req.params.id;
  const post = postBank.find(id);
res.send(postDetails(post))
});

const { PORT = 1337 } = process.env;
app.use(morgan("dev"));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
