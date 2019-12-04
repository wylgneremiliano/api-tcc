const express = require('express')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

router.use(authMiddleware)

router.get('/tabela', (req, res) => { 
    // Iniciando as variaveis de teste
    let cidades = ['A', 'B', 'C', 'D', 'E']
    let distancias = [22, 50, 48, 29, 22, 30, 34, 32, 50, 30, 22, 23, 48, 34, 22, 35, 29, 32, 23, 35]
    let i = req.params.i
    let j = req.params.j
    // Estrutura principal da tabela
    let tabelaDeProbabilidades = {
        x: Number,
        y: Number,
        distancia: Number,
        Txy: Number,
        feromonio: 0.1,
        Nxy: Number,
        pxy: Number
    }

    let tabelaFull = {
        rota: {}
    }


    tabelaDeProbabilidades.x = cidades[i]
    if (j == i) {
        tabelaDeProbabilidades.y = cidades[j - 1]
    }
    else {
        tabelaDeProbabilidades.y = cidades[j]
    }

    tabelaDeProbabilidades.distancia = distancias[j]
    tabelaDeProbabilidades.Txy = 1 / distancias[j]
    tabelaDeProbabilidades.feromonio = 0.1
    tabelaDeProbabilidades.Nxy = tabelaDeProbabilidades.Txy * tabelaDeProbabilidades.feromonio
    console.log(tabelaDeProbabilidades.x)
    console.log(tabelaDeProbabilidades.y)
    console.log(tabelaDeProbabilidades.distancia)
    console.log(tabelaDeProbabilidades.Txy)
    console.log(tabelaDeProbabilidades.feromonio)
    console.log(tabelaDeProbabilidades.Nxy)


    tabelaFull.rota = tabelaDeProbabilidades


    res.send(tabelaFull.rota)
})

module.exports = app => app.use('/formigas', router)