import userService from '../services/user.service.js'
import mongoose from 'mongoose'

const create = async (req, res) => {
   try { 
    const { name, email, password, phone } = req.body
    
    if (!name || !email || !password || !phone){
        res.status(400).send({ message : "Submit all fields for registration"})
    }
    const user = await userService.create(req.body)

    if(!user){
        return res.status(400).send({ message: "Error creating User"})
    }
    
    res.status(201).send({  user: { id: user._id, name, email, phone }, message: "User created successfully" })

    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const findById = async (req, res) => {
    try {

        const id = req.id
        
        // const user = await userService.findByIdService(id)
        const user = req.user
        res.send(user)

    }  catch (err) {
        res.status(500).send({message: err.message})
    }
}


const update = async (req, res) => {

    try{
        const { name, email, password, phone } = req.body
    
    if (!name && !email && !password && !phone){
        res.status(400).send({ message : "Submit at least one field for upgrade"})
    }

    const id = req.id 
    const user = req.user
    // const user = await userService.findByIdService(id)

    await userService.updateService(id, name, email, password, phone)

    res.send({ message: "User successfully updated!"})
    } catch (err) {
        res.status(500).send({ message: err.message})
    }
}

export default { create, findById, update }