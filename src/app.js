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
//init routes
app.use('',require('./routes'))
//handling error


module.exports=app