import express from 'express'
import { signUp } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', signUp)

export default router