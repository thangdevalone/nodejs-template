'use strict'

const { default: mongoose } = require("mongoose")



const connectString='mongodb://localhost:27017/ecoNode'

mongoose.connect(connectString).then(_=>console.log('Connection Mongodb Success'))
.catch(err=>console.log('error Connect'))

//dev
if(1===0){
    mongoose.set('debug',true)
    mongoose.set('debug',{color:true})
}

module.exports=mongoose