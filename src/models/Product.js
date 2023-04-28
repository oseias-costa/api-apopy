import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    category: {
        type: String,
        require: true
    },
    subcategory: {
        type: String,
        require: false
    },
    name: {
        type: String,
        require: true
    },
    suplier: {
        type: String,
        require: false
    },
    description: {
        type: String,
        require: false
    }
})

const Product = mongoose.model("Product", ProductSchema)

export default Product