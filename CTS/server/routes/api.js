const express = require('express')
const jwt = require('jsonwebtoken')
let router= express.Router()
const mongoose= require('mongoose')
const db =" mongodb://127.0.0.1:27017/mydb"
const User = require('../models/user');
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },(err)=>
{
    if (err) {
        console.log('error'+ err)
    }else{
        console.log('connected to db')
    }
});

router.get('/', function(req, res){
    res.send('api has started')
})
router.post('/register', function(req,res){
    let userData = req.body
    console.log(req.body);
    let user= new User(userData)
    user.save(function(err, registeredUser){
        if( err){
            console.log(err)
        }else{
            let payload ={ subject: registeredUser._id}
            let token = jwt.sign(payload,'protected')
            res.status(200).send({token})
        }
    })
})
router.post('/login',(req,res)=>{
    let userData=req.body
    User.findOne({email: userData.email},(error,user)=>{
        //  console.log(req.body.password)
    if(error){
        console.log(error)
    }else{
        if(!user){
            res.status(401).send("invalid email")
        }else if( user.password !== userData.password){
                res.status(401).send('Invalid password')
            }else{
                let payload= { subject: user._id}
                let token = jwt.sign(payload, 'protected')
                res.status(200).send({token})
            }
        }
    

    })
})
router.get('/events',(req,res)=>{
    let events =[{"id": "1","name": "AbhiOP"}]
    res.json(events)
})
router.get('/special',(req,res)=>{
    let events =[{"id": "1","name": "AbhiOP"}]
    res.json(events)
})
module.exports=router