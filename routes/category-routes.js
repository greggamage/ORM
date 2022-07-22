const router = require('express').Router()
const { Category, Product } = require('../models')


router.get('/categories', async function (req, res) {
  const categories = await Category.findAll({include: [Product]})
  res.json(categories)
})

router.get('/categories/:id', async function (req, res) {
  const categories = await Category.findOne({where: {id: req.params.id}, include: [Product]})
  res.json(categories)
})

router.post('/categories', async function (req, res) {
  const categories = await Category.create(req.body)
  res.sendStatus(200)
})

router.put('/categories/:id', async function (req, res) {
  const categories = await Category.update(req.body, {where: {id: req.params.id}})
  res.sendStatus(200)
})

router.delete('/categories/:id', async function (req, res) {
  const categories = await Category.destroy({where: {id: req.params.id}})
  res.sendStatus(200)
})

module.exports = router