const express = require('express')
const { adduser, getusers, deleteuser, updateuser } = require('../Controller/conroller')
const userRouter=express.Router()
userRouter.post('/add',adduser)
userRouter.get('/get',getusers)
userRouter.delete('/delete/:id',deleteuser)
userRouter.put('/update/:id',updateuser)
module.exports=userRouter;