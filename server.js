const express = require("express");
const app = express();

app.get("/hello", function (req, res) {
  res.send("hi user");
});
app.get("/anil", function (req, res) {
  res.send("hi anil");
});
app.get("/shivam", function (req, res) {
  res.send("hi shivam");
});
app.get("/rajat", function (req, res) {
  res.send("hi rajat");
});

app.listen(4000);
