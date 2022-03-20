const productModel = require("../models/product")

// handlers de productos o middleware final de productos
module.exports = {
  get: async (req, res) => {
    const { orderBy, search } = req.query
    console.log(orderBy)
    try {
      const products = await productModel.getAll(orderBy, search)
      res.send(products)
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e.message
      })
    }
  },
  getById: (req, res) => res.send("OK"),
  put: (req, res) => res.send("OK"),
  post: async (req, res) => {
    const { body } = req
    try {
      const product = await productModel.create(body)
      res.status(201).send(product)
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e.message
      })
    }
  },
  delete: (req, res) => res.send("OK")
}