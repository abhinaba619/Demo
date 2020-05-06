const express= require ('express')
const bodyParser = require('body-parser') 
const api= require('./routes/api')
const cors= require('cors')
const app= express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',api)
app.get('/',function(req,res){
    res.send('it is working')
})
app.listen(3000, function(){
    console.log('local host running')
})