const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.query.q);
  console.log(Buffer.from(req.query.q, "base64"). toString("utf8"));
  console.log("--------------------");
  res.end();
})

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}


app.listen(5000);
console.log("app listening on port 5000")