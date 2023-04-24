import { createService, findAllService } from '../services/category.service.js'

export const create = async (req, res) => {
    try {
        const { categoryName } = req.body

        if(!categoryName) {
            res.status(400).send({ message: "Submit all fields for registration" })
        }

        await createService({ categoryName })
        res.sendStatus(201)
        
    } catch (err) {
        res.status(500).send({ message: err.message })
    }  
}

export const findAll = async (req, res) => {
    const category = await findAllService()

    if(category.length === 0){
        return res.status(400).send({ message: "There are no registered category"})
    }

    res.send({ category })
}
