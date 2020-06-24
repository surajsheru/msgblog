require('./DB/db')
const express=require('express')
const PostMsgRouter=require('./controllers/PostMsgController')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
app.use(bodyparser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.use('/postmsg',PostMsgRouter)


const PORT=process.env.PORT||4000
app.listen(PORT,()=>{
    console.log('Express server is listening at',PORT)
})