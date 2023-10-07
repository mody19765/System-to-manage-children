import { q } from "../../../config/dbconnection.js";


const DisClid = async (req, res) => {
    const parent_id = req.id;
    await q.execute(`
    SELECT child.User_name,courses.Course_name
    from child LEFT  JOIN courses on child.id = courses.child_id 
    WHERE child.parent_id='${parent_id}' 
    `, async (err, result) => {
        if (err) {
            res.json({ message: "err", err })
        }
        else if(result==0)
        {
            await q.execute(`
            SELECT child.User_name
            from child  WHERE child.parent_id='${parent_id}' `)
        }

        else {
            res.json({ message: parent_id, result })
             }
    })
}
export { DisClid }