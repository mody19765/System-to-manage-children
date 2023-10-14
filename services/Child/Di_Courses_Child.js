import { q } from "../../config/dbconnection.js";


const DisCourses = async (req, res) => {
    const child_id = req.id;
    await q.execute(`
    SELECT courses.Course_name
    from courses WHERE courses.child_id='${child_id}'`, async (err, result) => {
        if (err) {
            res.json({ message: "err", err })
        }
        else {
            res.json({ message: "success", result })
        }
    })
}
export { DisCourses }