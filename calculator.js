//jshint esversion:6
const express = require("express");
const calculator = express();

calculator.get("/",function(req,res){
    res.sendFile(__dirname+ "/index.html");
  });

calculator.listen(3000,function(){
    console.log("Server is running on port 3000");
    });

