const mongoose = require("mongoose")

class Chat {
  constructor() {
    const schema = new mongoose.Schema({
      usuario: String,
      descripcion: String,
      codigo: String,
      img: String,
      message: Number,
      stock: { type: Number, default: 0 },
      timestamp: { type: Number, default: Date.now() }
    })

    // modelo
    // representacion en JS de nuestra collection en mongo
    this.model = mongoose.model("chat", schema)
  }

  async create(obj) {
    // db.chat.insertOne({}) -> mongoshell
    const chat = await this.model.create(obj)
    console.log("--------------------")
    console.log(JSON.stringify(chat, null, 2))
    return chat
  }

  // orderBy valor por default es string vacio
  async getAll(orderBy = '', search = '') {
    let chats = []
    let find = search ? { usuario: { $regex: search, $options: "i" } } : {}
    if (orderBy) {
      const sort = {}
      sort[orderBy] = -1
      chats = await this.model.find(find).sort(sort)
    } else {
      chats = await this.model.find(find)
    }
    console.log(`chats en DB: ${chats.length}`)

    // esto se puede hacer con proyecciones de mongo
    return chats.map((p) => {
      return {
        usuario: p.usuario,
        descripcion: p.descripcion,
        codigo: p.codigo,
        img: p.img,
        message: p.message,
        id: p["_id"],
        timestamp: p.timestamp
      }
    })
  }

  getById(id) {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new Chat()