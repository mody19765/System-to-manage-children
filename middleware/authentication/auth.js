import  Jwt  from "jsonwebtoken";




const auth=async(req,res,next)=>{

    const token=req.header('token')
    Jwt.verify(token,"Hacking",async(err,decoded)=>{

        if(err)
        {
            res.json({message:"اطلع بره يالا عاملي فيها ناصح "})
        }
        else{
            req.id=decoded.UserID
            next()
        }
    })
}
export{auth}