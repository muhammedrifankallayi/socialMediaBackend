const { query } = require('express')
const User=require('../model/userModel')


const register=async(req,res)=>{
try {

    console.log(req.body);

    const numberexis=await User.findOne({mobile:req.body.mobile})
    const emailexist=await User.findOne({email:req.body.email})
    if(numberexis||emailexist){
        res.status(200).send({success:false,message:"this user aready exist"})
    }
   
    else{
        const user=new User(req.body)
      user.save()
      res.status(200).send({success:true,message:'user reggistration success'}) 

    }
   
} catch (error) {
    console.log(error.message)
}
 


}

module.exports={
    register
}