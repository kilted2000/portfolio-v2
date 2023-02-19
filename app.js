const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");
const bodyParser = require("body-parser");
const favicon = require('serve-favicon');
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req,res)=>{
  res.render("index");
})
app.get("/contact", (req,res)=>{
  const day = date.getDate();
    res.render("contact", {latha: day});
  })

  app.get("/projects", (req,res)=>{
    const day = date.getDate();
    res.render("projects", {latha: day});
  })

  app.get("/success", (req,res)=>{
    const day = date.getDate();
    res.render("success", {latha: day});
  })

  app.get("/about", (req,res)=>{
    const day = date.getDate();
    res.render("about", {latha: day});
  })



   
  
//  app.get("/site.webmanifest)",(req,res)=>{
// res.render("site.webmanifest");
//  })

app.listen(3000, ()=>{
    console.log("Server running on Port 3000.");
})