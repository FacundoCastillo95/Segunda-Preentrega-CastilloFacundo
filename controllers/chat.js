const chatModel = require("../models/chat")


module.exports = {
  get: async (req, res) => {
    const { orderBy, search } = req.query
    console.log(orderBy)
    try {
      const chat = await chatModel.getAll(orderBy, search)
      res.send(chat)
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
      const chat = await chatModel.create(body)
      res.status(201).send(chat)
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e.message
      })
    }
  },
  delete: (req, res) => res.send("OK")
}