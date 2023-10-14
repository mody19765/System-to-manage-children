import  Jwt  from "jsonwebtoken";
const auth=async(req,res,next)=>{
    const token=req.header('token')
    Jwt.verify(token,"Hacking",async(err,decoded)=>{

        if(err)
        {
            res.json({message:"token is unvaild"})
        }
        else{
            req.id=decoded.UserID
            next()
        }
    })
}
export{auth}
