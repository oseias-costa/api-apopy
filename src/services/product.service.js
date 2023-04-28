import Product from "../models/Product.js";

export const createProductService = (body) => Product.create(body)

export const findAllProductsService = () => Product.find()