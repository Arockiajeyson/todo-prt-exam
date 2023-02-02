const mongoose =require('mongoose')

const loginSch=new mongoose.Schema({
    time:{type:String},
    pro:{type:String},
    userD:{type:mongoose.Types.ObjectId,ref:'RoginSchema'}
})
const modeExport =mongoose.model("TimeSChema",loginSch)
module.exports=modeExport