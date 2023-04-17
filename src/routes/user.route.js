const route = require('express').Router()
const userController = require('../controllers/user.controller.js')

const { validId, validUser } = require("../middlewares/global.moddlewares")

route.post("/", userController.create)
route.get("/:id", validId, validUser, userController.findById)
route.patch("/:id", validId, validUser, userController.update)

module.exports = route