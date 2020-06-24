const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/postMsgDb",{useNewUrlParser:true,useUnifiedTopology:true},
(err)=>{
    if(!err)
    {
        console.log("database is connected")
    }
    else{console.log(JSON.stringify(err,undefined,2))}
})
