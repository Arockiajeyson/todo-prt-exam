const Jwt =require('jsonwebtoken')

const jwt =async(req,res,next)=>{
    try {
        const header =req.headers.authorization
        // console.log(header)
        const verifying =await Jwt.verify(header,'jeyson')
        // console.log(verifying)
        if(verifying){
            req.user =verifying.data
            next()
        }else{
            return res.json('invalid token')
        }
    } catch (error) {
        res.json(error.message)
    }
}
module.exports=jwt