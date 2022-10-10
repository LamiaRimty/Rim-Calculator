//jshint esversion:6
const express = require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extented: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+ "/index.html");
  });

  calculator.post("/",function(req,res){
    res.send("Thanks for posting");
  });


app.listen(3000,function(){
    console.log("Server is running on port 3000");
    });

