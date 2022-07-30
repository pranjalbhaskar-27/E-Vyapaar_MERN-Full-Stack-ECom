const mongoose = require("mongoose");

var URL="mongodb+srv://pranjal:ecomevyapaar@cluster0.e0wvc.mongodb.net/test";

mongoose.connect(URL, {useUnifiedtopology:true, useNewUrlParser:true})

var dbconnect=mongoose.connection;

dbconnect.on('connected',()=>{
    console.log("Mongoose successfully connected")
});

module.exports=mongoose;