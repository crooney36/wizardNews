const express = require("express")
const postBank = require("./postBank");
const tag = require("html-template-tag");
const timeAgo = require("node-time-ago");

const postDetails = (post) => {

if (!post.id) {
  const html = tag `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <header><img src="/logo.png"/>Wizard News</header>
    <div class="not-found">
      <p>404: Page Not Found</p>
    </div>
  </body>
  </html>
  `;
  return (html)
;
} else {
  const html = tag `<!DOCTYPE html>
<html>
<head>
  <title>Wizard News</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="news-list">
    <header><img src="/logo.png"/>Wizard News</header>
   
      <div class='news-item'>
        <p>
          <span class="news-position">${post.id}. ▲</span>
          ${post.title}
          <small>(by ${post.name})</small>
        </p>
        <small class="news-info">
          ${post.upvotes} upvotes | ${timeAgo(post.date)}
        </small>
        <p>${post.content}</p>
      </div>
  </div>
</body>
</html>`;
return (html)
}
    
        }

module.exports = postDetails