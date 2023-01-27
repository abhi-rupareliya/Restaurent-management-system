require("dotenv").config()
const URL = process.env.DBURL
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect(URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( ()=>{
    console.log("Connected to Databse.")
})
.catch((e)=>{
    console.log(e)
})