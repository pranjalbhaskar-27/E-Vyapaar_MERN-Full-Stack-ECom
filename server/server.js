const bodyParser=require('body-parser')
const express=require('express');
const app=express();
const PORT=8080;

var dbconnect=require('./db');
var prodRoutes=require('./routes/products.routes');
app.use(bodyParser.json())

app.use('/products', prodRoutes)

app.get("/",(req,res)=>{

    res.send('something');

});

app.listen(PORT,()=>{

    console.log(`Server running at port: ${PORT}`);

})
