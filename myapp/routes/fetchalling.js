var express =require('express')
var router = express.Router();
const mongodb=require('mongodb')
const mongoclient=mongodb.MongoClient;
const dbName="pizzeria";
 
router.get('/ing',(req,res,next)=>{
    mongoclient.connect('mongodb://127.0.0.1:27017',(err,conn)=>{
          if(err){
            console.log(err);
            res.send('connection error');
          }
          else{
            console.log("Connection established");
            let db =conn.db(dbName);
            db.collection('ingredients').find({}).toArray((err,doc)=>{
                if(err || !doc){
                    console.log(err);
                    res.send("pizza not found")
                }else{
                    console.log(doc);
                    res.json(doc);
                }
                conn.close();
            })
          }
    })
})
module.exports=router