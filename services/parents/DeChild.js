import { q } from "../../config/dbconnection.js";
const DelChlid =async(req,res)=>{
    
const parent_id=req.id;
const { User_name} = req.body
await q.execute(`SELECT * FROM child where User_name  = '${User_name}' and parent_id ='${parent_id}' `, async(err, result) => {
    if (err) {
        res.json({ message: "err", err })
    }
    else {
        if (result.length != 0) {
        
            await q.execute( `DELETE FROM child WHERE User_name = '${User_name}'`,(err2,result2)=>{
                if (err2) {
                    res.json({ message: "err2", err2 })
                }
                else
                {
                    res.json({ message: "success" })
                }
            })
        }
        else {
            res.status(400).json({ message: "user namenot found "})
        }
    }
})
}
export{DelChlid}