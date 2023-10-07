import express from 'express'
import {  q } from './config/dbconnection.js'
import { parent } from './api/parent.routes.js'
import { child } from './api/child.routes.js'
import {  operation } from './api/operation.routes.js'
import { ADD_Courses } from './api/addCourse.routes.js'
const port = 9000
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
app.use("/parent", parent)
app.use("/child", child)
app.use("/parent", operation)
app.use("/parent", ADD_Courses)

app.get('/',(req,res)=>{
    q.execute(`select * from parents`,(err,result)=>{
        res.json({message :result})
    })
})

export{app}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))




// http://localhost:9000/parent/home