const express = require ('express')
const conectDB = require('./Confguration/Confguration')
const userRouter = require('./Router/Router')
const app = express()
const port=5000 
app.use(express.json())
conectDB()
app.use('/user',userRouter)
app.listen(port,console.log('server is runing'))
