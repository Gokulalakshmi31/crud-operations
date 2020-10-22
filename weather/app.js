const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = 'mongodb://localhost/WeatherDB'

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
con.on('open',function(){
    console.log('connected...')
})
app.use(express.json())
const dataRouter = require('./routers/data')
app.use('/data',dataRouter)
app.listen(8000, ()=>{
    console.log('server started')
})
/*app.use('/posts',()=>{
    console.log('middleware is running');
});

app.get('/',(req,res)=>{
    res.send('we are in the home');
});

app.get('/posts',(req,res)=>{
    res.send('we are in the posts');
});
app.listen(5000);*/