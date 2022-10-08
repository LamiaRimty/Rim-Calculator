const express = require("express");
const calculator = express();
calculator.listen(3000);

calculator.get("/",function(req,res){
    console.log("hello world");
})