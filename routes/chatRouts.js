const express=require('express')
const chatRoutes=express.Router()
const userControlls=require('../contoles/userControlls')


chatRoutes.post('/register',userControlls.register)






module.exports=chatRoutes