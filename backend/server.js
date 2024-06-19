const exp = require('express')
const path = require('path')
const app = exp()

require('dotenv').config()
const mc = require('mongodb').MongoClient;
app.use(exp.json())

mc.connect(process.env.DB_URL)
.then(client=>{
    const practicedb = client.db('practicedb');
    const sellerscollection=practicedb.collection('sellerscollection')
    const buyerscollection=practicedb.collection('buyerscollection')
    const productscollection=practicedb.collection('productscollection')
    app.set('sellerscollection',sellerscollection)
    app.set('productscollection',productscollection)
    app.set('buyerscollection',buyerscollection)
    console.log("Connection to Database successful")

})
.catch(err=>{
    console.log("ERROR in Database Connection",err)
})
app.use(exp.static(path.join(__dirname,'../frontend/build')))


const sellerApp=require('./apis/seller-api')
const buyersApp=require('./apis/buyer-api')


app.use('/buyer-api',buyersApp)
app.use('/seller-api',sellerApp)


app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'))
})



app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message});
})






const port = process.env.PORT || 5000;
app.listen(port,()=>{ console.log(`Web server running on port ${port}`)
})



