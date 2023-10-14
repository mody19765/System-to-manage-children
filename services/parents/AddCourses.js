import { q } from "../../config/dbconnection.js";
const AdCourses = async (req, res) => {
    const parent_id = req.id;
    const { User_name, Course_name } = req.body
    if (Course_name == null) {
        res.json({ message: "must enter Course name" })
    }
    else if (User_name == null) {
        res.json({ message: "must enter User name" })
    }
    else {
        await q.execute(`SELECT * FROM child where User_name = '${User_name}' and  parent_id = '${parent_id}'  `, async(err, result) => {
            if (err) {
                res.json({ message: "err", err })
            }
            else {
                if (result.length == 0) {

                    res.status(400).json({ message: "Child not found" })


                }
                else {
                    await q.execute(
                        `INSERT INTO Courses (Course_name,child_id ) VALUES 
                ('${Course_name} ','${result[0].id}')`)
                    res.json({ message: "success" })
                }
            }
        })
    }


}
export { AdCourses }