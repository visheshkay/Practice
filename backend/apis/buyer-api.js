const exp=require('express');
const buyerApp=exp.Router();  
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require("express-async-handler")
const jwt=require('jsonwebtoken')

require('dotenv').config()

     let sellerscollection;
     let buyerscollection;
     let productscollection;

     
     buyerApp.use((req,res,next)=>{
        sellerscollection=req.app.get('sellerscollection')
        buyerscollection=req.app.get('buyerscollection')
        productscollection=req.app.get('productscollection')
      next()
     })


     //singup
     buyerApp.post('/buyers',expressAsyncHandler(async(req,res)=>{
        buyerscollection=req.app.get('buyerscollection')
        
        const newbuyer=req.body;
      //   console.log(newbuyer)
        
        const dbbuyer=await buyerscollection.findOne({username:newbuyer.username})
      //   console.log(dbbuyer)
        if(dbbuyer!= null){
            res.send({message:"Buyer existed"})
        }else{
           
            const hashedPassword=await bcryptjs.hash(newbuyer.password,6)
            
            newbuyer.password=hashedPassword;
            
            await buyerscollection.insertOne(newbuyer)
           
            res.send({message:"Buyer created"})
        }
     
     }))


//login
     buyerApp.post('/login',expressAsyncHandler(async(req,res)=>{
   
        const buyerCred=req.body;
        
        const dbbuyer= await buyerscollection.findOne({username:buyerCred.username})
        if(dbbuyer===null){
            res.send({message:"Invalid username"})
        }else{
            
           const status= await bcryptjs.compare(buyerCred.password,dbbuyer.password)
           if(status===false){
            res.send({message:"Invalid password"})
           }else{
        
            const signedToken=jwt.sign({username:dbbuyer.sellername},process.env.SECRET_KEY,{expiresIn:'1d'})
        
            res.send({message:"login success",token:signedToken,user:dbbuyer})
           }
        }
     }))






     module.exports=buyerApp;