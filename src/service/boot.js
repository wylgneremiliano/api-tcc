const app = require('@app')
const config = require('@config')

module.exports = (err) => {
    if (err) {
        return console.log('Erro ao se conectar com o banco de dados')

    }
    app.listen(config.app.port, (err) => {
        if (err) {
            return console.log(`Erro: ${err}`)
        }
        console.log(`iniciou em http://localhost:${config.app.port}`)
    })
}

