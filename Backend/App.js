require("dotenv").config()
const PORT = process.env.PORT
const express = require('express')
require('./DB/Connection')
const app = express()
const cors = require('cors')
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())
require('./Routes/UserRoutes')(app)
require('./Routes/Menu')(app)
app.listen(4000,()=>{
    console.log("Server is Listening")
})