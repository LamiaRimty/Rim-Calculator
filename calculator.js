const express = require("express");
const calculator = express();
calculator.listen(3000,function(){
    console.log("Server is running on port 3000");
    });

calculator.get("/",function(req,res){
  res.send("<h1>Hello World</h1>");
})