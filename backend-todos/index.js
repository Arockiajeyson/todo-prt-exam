const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use('/login',require('./Login-todo'))
app.use('/Register',require('./Register-todos'))
app.use('/uploading',require('./postSavingAc'))
app.listen(3000, async () => {
    await mongoose.connect('mongodb+srv://Aro:aro123@arockiajeyson.aswzaya.mongodb.net/?retryWrites=true&w=majority')
    console.log('db connect')
    console.log('port')
})