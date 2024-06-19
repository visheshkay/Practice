const exp = require('express')
const app = exp()
app.use(exp.json())

require('dotenv').config()
const mc = require('mongodb').MongoClient;

mc.connect(process.env.DB_URL)
.then(client=>{
    const practicedb = client.db('practicedb');
    console.log("Connection to Database successful")
})
.catch(err=>{
    console.log("ERROR in Database Connection",err)
})

app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message});
})
const port = process.env.PORT || 5000;
app.listen(port,()=>{ console.log(`Web server running on port ${port}`)
})