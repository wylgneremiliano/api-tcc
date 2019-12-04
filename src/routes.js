const Router = require('express').Router()
const authController = require('@controller/authController')
Router.post('/register', authController.register)
Router.post('/authenticate', authController.authenticate)
module.exports = Router

