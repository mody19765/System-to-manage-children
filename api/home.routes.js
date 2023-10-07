import express from 'express'
import { Home } from '../services/tasks/home.js'
const home = express.Router()
home.post("/home",Home)
export { home } 




