import { q } from "../../../config/dbconnection.js";
import bcrypt, { hash } from "bcrypt"
const Change_pass_2 = async (req, res) => {
    const User_id = req.id;
    const { password, newpassword } = req.body
    if (newpassword == null) {
        res.status(400).json({ message: "new password is null" })
    }
    else if (password == null) {
        res.status(400).json({ message: "password is null" })
    }

    else {

        await q.execute(`SELECT * FROM child where id = '${User_id}'`, async (err, result) => {
            if (result != 0) {
                const match = await bcrypt.compare(password, result[0].password)
                if (match) {
                    bcrypt.hash(newpassword, 4, async (err, hash) => {
                        await q.execute(`UPDATE child
                    SET  password = '${hash}'
                    WHERE id = '${User_id}'`)
                        res.status(400).json({ message: "success Update" })
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


export { Change_pass_2 }

/**
 * 
 * p=>p
 * c=>c
 */