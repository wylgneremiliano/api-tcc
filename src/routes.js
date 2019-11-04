const Router = require('express').Router()

const TestController = require('@controller/test')


Router.get('/', TestController.helloWorld)
Router.post('/', TestController.createSomeone)
module.exports = Router

