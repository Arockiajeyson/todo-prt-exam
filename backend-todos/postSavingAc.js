const express = require('express')
const mongoose = require('mongoose')
const app = express()
const jwt =require('jsonwebtoken')
const Schema =require('./SchemaRegister')
const TimeSchem =require('./timeSch')
const SchemPost =require('./loginSche')
const JWT =require('./JWT')

app.post('/posting',JWT,async(req,res)=>{
    try {
        // console.log(req.body)
        // let tim =new Date().toLocaleTimeString()
        // `${0}:0${Math.round(Math.random()*5)}`
        const posting =await SchemPost.create({
            activity:req.body.activity,
            status:'pending',
            action:'start',
            time:`${0}:0${Math.round(Math.random()*5)}`,
            userD:req.user
        })
        return res.json('uploaded')
    } catch (error) {
        return res.json(error.message)
    }
})
app.post('/getingTodos',JWT,async(req,res)=>{
    try {
        const finding =await SchemPost.find({userD:req.user})
        return res.json(finding)
    } catch (error) {
        return res.json(error.message)
    }
})
app.post('/updatingAc',JWT,async(req,res)=>{
    try {
        const {action,idx} =req.body
        if(action ==='start'){
            const finAcID=await SchemPost.findOne({_id:idx})
            finAcID.status='Ongoing'
            finAcID.save()
        }else if(action ==='Pause'){
            const finAcID=await SchemPost.findOne({_id:idx})
            finAcID.status='pending'
            finAcID.action='Resume'
            finAcID.save()
        }else{
            const finAcID=await SchemPost.findOne({_id:idx})
            const time =await TimeSchem.create({
                time:finAcID.time,
                pro:finAcID.activity,
                userD:req.user
            })
            time.save()
            finAcID.status='Completed'
            finAcID.action=''
            finAcID.save()
            // const findTime =await TimeSchem.find({userD:req.user})
            // return res.json(findTime)
        }
    } catch (error) {
        return res.json(error.message)
    }
})
app.post('/time',JWT,async(req,res)=>{
    try {
        const find =await TimeSchem.find({userD:req.user})
        return res.json(find)
    } catch (error) {
        return res.json(error.message)
    }
})
module.exports=app