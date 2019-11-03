require('dotenv').config()
require('module-alias/register')
const config = require('@config')

const app = require('@app')

app.listen(config.app.port, (err) => {
    if (err) {
        return console.log(`Erro: ${err}`)
    }
    console.log(`iniciou em http://localhost:${config.app.port}`)
})