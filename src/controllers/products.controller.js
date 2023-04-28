import { createProductService, findAllProductsService } from "../services/product.service.js"


export const createProduct = async (req, res) => {
    try {
        const { category, subcategory, product, suplier, description } = req.body

        if (!category && !subcategory && !product) {
            res.status(400).send({message: 'Category, product or price filds not found'})
        }

        await createProductService({
            category, subcategory, product, suplier, description
        })
        res.sendStatus(201)

    } catch (err) {
        return res.status(500).send({message: err.message})
    }

}

export const findAllProducts = async (req, res) => {
    const products = await findAllProductsService()

    if (products.length === 0) {
        res.status(400).send({message: 'There are not registered product'})
    }

    res.send({ products })
} 