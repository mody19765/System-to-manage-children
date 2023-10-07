import { q } from "../../../config/dbconnection.js";
import bcrypt from "bcrypt"

const AdChlid = async (req, res) => {
    const parent_id = req.id;
    const check = 1
    const { User_name, password } = req.body
    if (password == null) {
        res.json({ message: "must enter Password" })

    }
    else if (User_name == null) {
        res.json({ message: "must enter name" })
    }
    else {
        await q.execute(`SELECT * FROM child where User_name = '${User_name}' `, async (err, result) => {
            if (err) {
                res.json({ message: "err", err })
            }
            else {

                if (result.length == 0) {


                    bcrypt.hash(password, 4, async (err, hash) => {

                        try {
                            await q.execute(
                                `INSERT INTO child (parent_id,User_name,password) VALUES 
                  ('${parent_id} ','${User_name}','${hash}' )`, (err, resuk) => {

                                if (err) {
                                    res.status(400).json({ message: "Err" })
                                }
                                else {
                                    res.json({ message: "success" })
                                }

                            })
                        }
                        catch (err) {
                            console.log(err);
                        }
                    })

                }

                else {
                    res.status(400).json({ message: "user name already exits ", result: result[0].User_name })
                }
            }
        })


    }
}
export { AdChlid }