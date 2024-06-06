require('dotenv').config()
const compression = require('compression');
const express=require('express');
const {default:helmet} =require('helmet')
const morgan = require('morgan');
const { checkOverLoad } = require('./helpers/check.connect.js');

const app=express();


app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// morgan("compile")
//init middlewares


//init db
require('./db/init.mongodb.js')
checkOverLoad()
//init routes
app.get('/',(req,res,next)=>{
    const strCompress='Hello ThangDev'
    return res.status(200).json({
        message:'Welcome',
        metadata:strCompress.repeat(10000)
    })
})
//handling error


module.exports=app