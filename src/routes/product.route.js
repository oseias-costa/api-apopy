import { Router } from "express";
const router = Router()

import { createProduct, findAllProducts } from "../controllers/products.controller.js";

router.get('/', findAllProducts)
router.post('/', createProduct)

export default router