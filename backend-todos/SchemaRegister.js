const mongoose =require('mongoose')

const loginSch= new mongoose.Schema({
    email:{type:String},
    password:{type:String}
})
const modeExport = mongoose.model("RoginSchema",loginSch)

module.exports=modeExport