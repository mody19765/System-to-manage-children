import express from 'express'
import { AdChlid } from '../services/log/parents/AdChild.js'
import { DelChlid } from '../services/log/parents/DeChild.js'
import { UpChlid } from '../services/log/parents/UpChild.js'
import { DisClid } from '../services/log/parents/DiChild.js'
import { auth } from '../middleware/authentication/auth.js'
import { validation } from '../middleware/validation/ValidUser.js'
import { validation2 } from '../middleware/validation/ValidClid.js'
const operation = express.Router()
operation.post("/chlid", auth,validation2, AdChlid)
operation.delete("/chlid", auth,DelChlid)
operation.put("/chlid", auth, UpChlid)
operation.get("/chlid", auth, DisClid)
export { operation }




