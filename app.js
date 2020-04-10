const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/login", function(req, res){
  res.render("login.ejs");
});

app.get("/signup", function(req, res){
  res.render("signup.ejs");
})

app.listen(port, hostname, () => {
  console.log("server started");
})