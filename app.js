const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req,res)=>{
  res.render("index");
})
app.get("/contact", (req,res)=>{
    res.render("contact");
  })

  app.get("/projects", (req,res)=>{
    res.render("projects");
  })

  app.get("/success", (req,res)=>{
    res.render("success");
  })

  app.get("/about", (req,res)=>{
    res.render("about");
  })


app.listen(3000, ()=>{
    console.log("Server running on Port 3000.");
})