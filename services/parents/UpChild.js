
import { q } from "../../config/dbconnection.js";
import bcrypt, { hash } from "bcrypt"

const UpChlid = async (req, res) => {
    const id = req.params;
    const parent_id = req.id;
    const { User_name, newpassword, New_User_name } = req.body
    if (newpassword == null && New_User_name!=null) {
            await q.execute(`UPDATE child
            SET User_name = '${New_User_name}'
            WHERE User_name = '${User_name}' and parent_id ='${parent_id}'`)
            res.status(400).json({ message: "success" })
    }
    if (newpassword != null && New_User_name==null) {
      const  New_User_name = User_name
        bcrypt.hash(newpassword, 4, async (err, hash) => {
            await q.execute(`UPDATE child
            SET User_name = '${New_User_name}', password = '${hash}'
            WHERE User_name = '${User_name}' and parent_id ='${parent_id}'`)
            res.status(400).json({ message: "success" })
        })
    }
    else
    {
        res.status(400).json({ message: "Updata not working" })

    }

}


export { UpChlid }
