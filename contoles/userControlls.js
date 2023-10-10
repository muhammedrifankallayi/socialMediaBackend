const User=require('../model/userModel')


const register=async(req,res)=>{

console.log(req.body)
const user=new User(req.body)
user.save()
res.status(200).send({success:true})    
 


}

module.exports={
    register
}