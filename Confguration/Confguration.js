const mongoose = require('mongoose')
const conectDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/esra')
        console.log("data base is conected")
    }catch (error){
        console.log("data base is not conected ")
    }
}
module.exports =conectDB