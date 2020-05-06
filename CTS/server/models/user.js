let mongoose= require('mongoose')
const schema=mongoose.Schema
const userSchema= new schema({
    "name": String,
    "email": String ,
    "password": String,
    "contact": Number
})
module.exports=mongoose.model('user', userSchema, 'mycollection')