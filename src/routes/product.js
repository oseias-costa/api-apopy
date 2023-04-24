import { Router } from "express";
const router = Router()

router.get('/', findAllProducts)
router.post('/', createProduct)