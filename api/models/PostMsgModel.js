const mongoose=require('mongoose')

const PostMsg=mongoose.model("postMsg",
{
 title:{type:String},
 msg:{type:String}
})
module.exports={PostMsg}