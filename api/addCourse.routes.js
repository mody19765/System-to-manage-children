import express from 'express'
import { AdCourses } from '../services/parents/AddCourses.js'
import { auth } from '../middleware/authentication/auth.js'
const ADD_Courses = express.Router()
ADD_Courses.post("/AddCourse",auth,AdCourses)
export { ADD_Courses } 




