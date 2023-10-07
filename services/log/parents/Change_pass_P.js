import { q } from "../../../config/dbconnection.js";
import bcrypt, { hash } from "bcrypt"
const Change_pass = async (req, res) => {
    const User_id = req.id;
    const { password, newpassword } = req.body
    if (newpassword == null) {
        res.json({ message: "new password is null" })
    }
    else if (password == null) {
        res.json({ message: "password is null" })
    }

    else {
        await q.execute(`SELECT * FROM parents where id = '${User_id}'`, async (err, result) => {
            if (result != 0) {
                const match = await bcrypt.compare(password, result[0].password)
                if (match) {
                    bcrypt.hash(newpassword, 4, async (err, hash) => {
                        await q.execute(`
                        UPDATE parents SET password = '${hash}'
                         WHERE id = '${User_id}'` ,(err,resu)=>{
                            if(err)
                            {
                                res.json({ message: "error in sql",err })
                            }
                            else
                            {
                                res.json({ message: "success Update" })
                            }
                         })
                    })
                }
                else {
                    res.status(400).json({ message: "Wrong Password" })
                }

            }
            else {
                res.status(400).json({ message: "User not found" })
            }


        })

    }

}


export { Change_pass }

/**
 * 
 * p=>p
 * c=>c
 */