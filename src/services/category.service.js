import Category from "../models/Category.js";

export const createService = (body) => Category.create(body)

export const findAllService = () => Category.find()
