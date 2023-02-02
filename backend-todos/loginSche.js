const mongoose =require('mongoose')

const loginSch=new mongoose.Schema({
    activity:{type:String},
    status:{type:String},
    action:{type:String},
    time:{type:String},
    userD:{type:mongoose.Types.ObjectId,ref:'RoginSchema'}
})
const modeExport =mongoose.model("LoginSchema",loginSch)
module.exports=modeExport