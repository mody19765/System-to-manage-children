
import { q } from "../../config/dbconnection.js";
import bcrypt, { hash } from "bcrypt"

const siginup = async (req, res) => {

    const { name, email, password } = req.body
    await q.execute(`SELECT * FROM parents where email = '${email}' `, async (err, result) => {
        if (err) {
            res.json({ message: "err", err })
        }
        else {
            if (result.length == 0) {
                await bcrypt.hash(password, 4, async (err, hash) => {

                    try {
                        await q.execute(
                            `INSERT INTO parents (name, email,password) VALUES 
                        ('${name}', '${email}','${hash}')`
                            , (err, resu) => {

                                if (err) {
                                    res.status(400).json({ message: "Duplicate name" })
                                }
                                else {
                                    res.status(200).json({ message: "success", result: result.length })
                                }
                            })
                    }
                    catch (err) {
                        console.log(err);
                    }
                })
            }
            else {
                res.status(400).json({ message: "email already exits ", result: result[0].email })
            }
        }
    })
}
export { siginup }



