const express = require('express')
const app = express()
const sendError = require('@helper/sendError')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(sendError);
require('@controller/authController')(app)
require('@controller/rotasFormigas')(app)
require('@controller/cityController')(app)
module.exports = app