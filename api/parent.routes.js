import express from 'express'

import { siginup } from "../services/log/parents/signup.js"
import { signin } from "../services/log/parents/signin.js"
import { validation } from '../middleware/validation/ValidUser.js'
import { auth } from '../middleware/authentication/auth.js'
import { Change_pass } from '../services/log/parents/Change_pass_P.js'
const parent = express.Router()
parent.post("/siginup", validation, siginup)
parent.post("/siginin", signin)
parent.put("/Change_Password", auth, Change_pass)

export { parent }




