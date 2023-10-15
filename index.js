const express=require('express')
const app=express()
const port=5000
const chatRoutes=require('./routes/chatRouts')
const dbConfig=require('./config/dbConfig')

app.use(express.json())
app.use("/api/chat/", chatRoutes);



app.listen(port,()=>{
    console.log("chat server running.")
})