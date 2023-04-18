import User from "../models/User.js"

const create = (body) => User.create(body)

const findByIdService = (id) => User.findById(id)

const updateService = (id, name, email, password, phone) => 
    User.findOneAndUpdate({ _id: id },{ name, email, password, phone })

export default { create, findByIdService, updateService }