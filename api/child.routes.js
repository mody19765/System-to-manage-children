import express from 'express'
import { C_signin } from '../services/Child/C_signin.js'
import { DisCourses } from '../services/Child/Di_Courses_Child.js'
import { auth } from '../middleware/authentication/auth.js'
import { Change_pass_2 } from '../services/Child/Change_pass_C.js'
const child = express.Router()
child.post("/siginin", C_signin)
child.get("/Courses", auth, DisCourses)
child.put("/Change_password", auth, Change_pass_2)
export { child }




