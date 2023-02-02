const express = require('express')
const mongoose = require('mongoose')
const app = express()
const jwt =require('jsonwebtoken')
const Schema =require('./SchemaRegister')
const bcrypt =require('bcrypt')

app.post('/',async(req,res)=>{
    try {
        const find =await Schema.findOne({email:req.body.email})
        console.log(req.body)
        if(find){
            const comparing =await bcrypt.compare(req.body.password,find.password)
            if(!comparing){
                return res.json('password Worng')
            }else{
                const token =await jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: find._id
                  }, 'jeyson');
                  return res.json(["Logged-in",token])
            }
        }else{
            return res.json('Register first')
        }
    } catch (error) {
        return res.json(error.message)
    }
})




module.exports=app