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
app.get("/", (req,res)=>{
    res.render("contact");
  })

  app.get("/", (req,res)=>{
    res.render("projects");
  })

  app.get("/", (req,res)=>{
    res.render("success");
  })

  app.get("/", (req,res)=>{
    res.render("about");
  })

  app.get("/posts/:postName", (req,res)=>{
    let requestedPage = _.lowerCase(req.params.postName);
   posts.forEach((post)=>{
     let storedTitle = _.lowerCase(post.title);
    if( requestedPage === storedTitle)
       res.render("post", {title: post.title, content: post.content});
   }) 
    }
   );

app.listen(3000, ()=>{
    console.log("Server running on Port 3000.");
})