require('dotenv').config()
const mongoose=require('mongoose')
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on('connected',()=>console.log("Chat db is ready...."))
mongoose.connection.on('error',(error)=>console.log("error in mongo connection",error))

module.exports=mongoose