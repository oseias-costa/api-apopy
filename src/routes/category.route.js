import { Router } from 'express'
const router = Router()

import { create, findAll } from '../controllers/category.controller.js'
import { authMiddleware } from '../middlewares/auth.middlewares.js'

router.post('/', authMiddleware, create)
router.get('/', authMiddleware, findAll)

export default router