const express = require('express')
const router = express.Router()
const Data = require('../models/datas')
//retrive all data
router.get('/', async(req,res)=>{
    try{
        const datas = await Data.find()
        res.json(datas)
    }catch(err){
        res.send('Error'+ err)
    }
    //console.log('Get request')
    //res.send('get request')
})
//retrive by id
router.get('/:id', async(req,res)=>{
    try{
        const data = await Data.findById(req.params.id)
        res.json(data)
    }catch(err){
        res.send('Error'+ err)
    }
})
//create operation
router.post('/',async(req,res)=>{
     const data1 = new Data({
         city: req.body.city,
         temperature: req.body.temperature
     })
     try{
        const d1 = await data1.save()
        res.json(d1)
     }catch(err){
         res.send('Error')
     }
})

//update operation
router.patch('/:id',async(req,res)=> {
    try{
        const data2 = await Data.findById(req.params.id) 
        data2.temperature = req.body.temperature
        const d2 = await data2.save()
        res.json(d2)   
    }catch(err){
        res.send('Error')
    }

})

//delete operation
router.delete('/:id', async(req,res)=>{
    try{
        const data = await Data.findByIdAndDelete(req.params.id)
        res.json(data)
    }catch(err){
        res.send('Error'+ err)
    }
})
module.exports = router