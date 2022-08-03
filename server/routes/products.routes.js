const express=require("express");
const router=express.Router();
const Products = require("../models/products.model.js")


router.get("/allprods",(req,res)=>{

    Products.find({},(err, resDocs)=>{

        if(!err){
            console.log("Get all prods working")
            return res.send(resDocs);
            
        }
        else{
            return res.status(400).json({message: "Get all-prods has some problem"})
        }

    })

})


router.post('/getprodsbyid',(req,res)=>{

    Products.find({_id:req.body.prodId},(err,docs)=>{
        if(!err){
            console.log("Posting getProdById Successfull.")
            res.send(docs[0])
        }
        else{
            console.log("Posting getProdById Failed.")
            return res.status(400).json({message:"Something went wrong during fetching ProductById"})
        }
    })

})

module.exports=router;