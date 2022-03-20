const mongoose = require("mongoose")

class Product {
  constructor() {
    const schema = new mongoose.Schema({
      nombre: String,
      descripcion: String,
      codigo: String,
      url: String,
      precio: Number,
      stock: { type: Number, default: 0 },
      timestamp: { type: Number, default: Date.now() }
    })

    // modelo
    // representacion en JS de nuestra collection en mongo
    this.model = mongoose.model("product", schema)
  }

  async create(obj) {
    // db.product.insertOne({}) -> mongoshell
    const product = await this.model.create(obj)
    console.log("--------------------")
    console.log(JSON.stringify(product, null, 2))
    return product
  }

  // orderBy valor por default es string vacio
  async getAll(orderBy = '', search = '') {
    let products = []
    let find = search ? { nombre: { $regex: search, $options: "i" } } : {}
    if (orderBy) {
      const sort = {}
      sort[orderBy] = -1
      //sort.precio = -1
      products = await this.model.find(find).sort(sort)
    } else {
      products = await this.model.find(find)
    }
    console.log(`Productos en DB: ${products.length}`)

    // esto se puede hacer con proyecciones de mongo
    return products.map((p) => {
      return {
        nombre: p.nombre,
        descripcion: p.descripcion,
        codigo: p.codigo,
        url: p.url,
        precio: p.precio,
        stock: p.stock,
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

module.exports = new Product()