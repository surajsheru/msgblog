const express=require('express')
const router=express.Router()
const objectId=require('mongoose').Types.ObjectId
const{PostMsg}=require('../models/PostMsgModel')

//get all the msgs

router.get('/',(req,res)=>
{
 PostMsg.find((err,docs)=>{
     if(!err){
         res.send(docs)
     }
     else{console.log("error while retriving records"+ JSON.stringify(err,undefined,2))}
 });
});

//creating new record
router.post('/',(req,res)=>{
  const newMsg= new PostMsg({
      title:req.body.title,
      msg:req.body.msg
  })
  newMsg.save((err,doc)=>
  {
    if(!err){
        res.send(doc)
    }
    else{console.log("error while creating new  records"+ JSON.stringify(err,undefined,2))}
  })
});

//updating record

router.put('/:id',(req,res)=>
{
  if(!objectId.isValid(req.params.id))
  {
      return res.status(400).send('record not found'+req.params.id)
  }
  const updateMsg={
    title:req.body.title,
    msg:req.body.msg
  }

  PostMsg.findByIdAndUpdate(req.params.id,
    {$set:updateMsg},(err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{console.log("error while updating   records"+ JSON.stringify(err,undefined,2))} 
      })
})
//deleting record

router.delete('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id))
    {
        return res.status(400).send("no record found with given "+req.params.id)
    }

    PostMsg.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{console.log("error while deleting    records"+ JSON.stringify(err,undefined,2))} 
    })
})


module.exports=router