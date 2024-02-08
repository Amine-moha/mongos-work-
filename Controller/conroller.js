const users=require('../Model/Model')
exports. adduser =async (req,res)=>{
    try{
        const user=new users(req.body)
        await user.save()
        res.status(200).send({message:'user successfully added',user})
    }catch(error) {
        res.status(500).send({message:'error creating user',error})
    }
}
exports.getusers = async (req,res)=>{
    try{
        const allusers= await users.find()
        res.status(200).send({message:'all user successfully',allusers})
    }catch(error){
        res.status(500).send({message:'failed to get users',error})
    }
}
exports.deleteuser =async (req,res)=>{
    try{
        const user= await users.findByIdAndDelete(req.params.id)
        res.status(200).send({message:'user successfully deleted',user})
    }catch(error){
        res.status(500).send({message:'user fail to delete',error})
    }
}
exports.updateuser=async(req,res)=>{
    try{
        const user=await users.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).send({message:'user updated',user})
    }catch(error){
        res.status(500).send({message:'fail to updated',error}) 
    }
}