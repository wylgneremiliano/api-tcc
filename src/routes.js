const Router = require('express').Router()

const TestController = require('@controller/test')


Router.get('/', TestController.helloWorld)
module.exports = Router

