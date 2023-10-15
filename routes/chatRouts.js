const express=require('express')
const chatRoutes=express.Router()
const userControlls=require('../contoles/userControlls')


chatRoutes.post('/register',userControlls.register)
chatRoutes.post('/login',userControlls.userLogin)






module.exports=chatRoutes