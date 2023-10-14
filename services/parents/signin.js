import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
import { q } from "../../config/dbconnection.js";


const signin = async (req, res) => {
    const { email, password } = req.body
    await q.execute(`SELECT * FROM parents where email = '${email}' `, async (err, result) => {
        if (err) {
            res.json({ message: "syntacks", err })
        }
        if (result.length != 0) {
            const match = await bcrypt.compare(password, result[0].password)
            if (match) {
                let token = Jwt.sign({ root: 'task', UserID: result[0].id, UserName: result[0].name }, 'Hacking');
                res.json({ message: "Accepted", token })
            }
            else {
                res.status(400).json({ message: "Wrong password" })
            }
        }
        else {
            res.status(400).json({ message: "email not found" })
        }

    })



}
export { signin }