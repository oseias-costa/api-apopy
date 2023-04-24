import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        require: true
    },
    subcategory: {
        type: Array,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

const Category = mongoose.model("Category", CategorySchema)

export default Category