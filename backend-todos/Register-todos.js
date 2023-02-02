const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt=require('bcrypt')
const Schema =require('./SchemaRegister')

app.post('/',async(req,res)=>{
    try {
        const find =await Schema.findOne({email:req.body.email})
        if(find){
            return res.json('Already exist try new email')
        }else{
            const hashing=await bcrypt.hash(req.body.password,10)
            req.body.password=hashing
            const saving =await Schema.create(req.body)
            return res.json('Registered Thankyou')
        }
    } catch (error) {
        return res.json(error.message)
    }
})

module.exports=app