const Products = require('../models/products');
const MongoCRUD = require('../repository/crud');
class ProductsController extends MongoCRUD {
    constructor() {
        super(Products);
    }
}

module.exports = new ProductsController();