const express = require('express')
const authMiddleware = require('../middlewares/auth')

const City = require('@model/city')

const router = express.Router()

router.use(authMiddleware)
// listagem
router.get('/', async (req, res) => {
    try {
        const cities = await City.find().populate('user')
        return res.send({ cities })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading cities' })
    }
})
router.get('/:cityId', async (req, res) => {
    try {
        const city = await City.findById(req.params.cityId).populate('user')
        return res.send({ city })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading city' })
    }
})
// criação 
router.post('/', async (req, res) => {
    try {
        const { name, x, y, description } = req.body
        const city = await City.create({ name, x, y, description, user: req.userId })
        return res.send({ city })
    } catch (error) {
        return res.status(400).send({ error: 'Error creating new city:' })
    }
})
router.put('/:cityId', async (req, res) => {
    try {
        const { name, x, y, description } = req.body
        const city = await City.findByIdAndUpdate(req.params.cityId, {
            name,
            x,
            y,
            description,
        }, { new: true })
        return res.send({ city })
    } catch (error) {
        return res.status(400).send({ error: 'Error creating new city:' })
    }
})
router.delete('/:cityId', async (req, res) => {
    try {
        await City.findByIdAndRemove(req.params.cityId)
        return res.send()
    } catch (error) {
        return res.status(400).send({ error: 'Error deleting city' })
    }
})


module.exports = app => app.use('/city', router)