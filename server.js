const express = require('express')
const app = express()

app.use('/', (req, res) => {
    res.send('Hello, world! ')
})

app.listen(4000, (err) => {
    if (err) {
        return console.log(`Erro: ${err}`)
    }
    console.log('iniciou em http://localhost:4000')
})