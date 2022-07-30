const express=require("express");
const router=express.Router();
const Product = require("../models/products.model.js")


router.get("/allprods",(req,res)=>{

    Product.find({},(err, docs)=>{

        if(!err){
            return res.json({data:docs});
        }
        else{
            return res.status(400).json({message: "something wrong in the backend side broh!"})
        }

    })

})

module.exports=router;