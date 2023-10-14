import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
import { q } from "../../config/dbconnection.js";
const C_signin = async (req, res) => {
    const { name, password } = req.body
    await q.execute(`SELECT * FROM child where User_name = '${name}' `, async (err, result) => {
        if (err) {
            res.json({ message: "Sy-Erro", err })
        }
        if (result.length != 0) {
            const match = await bcrypt.compare(password, result[0].password)
            if (match) {
                let token = Jwt.sign({ root: 'task', UserID: result[0].id, UserName: result[0].name }, 'Hacking');
                res.json({ message: "Accepted", token })
            }
            else {
                res.json({ message: "Wrong password" })
            }
        }
        else {
            res.json({ message: "name not found" })
        }

    })



}
export { C_signin }