const controller = require("../controllers/products")
const router = require("express").Router()


router.get("", controller.get) // read
router.get("", controller.getById) // read by id
router.post("", controller.post) // create
router.put("", controller.put) // update
router.delete("", controller.delete) // delete

module.exports = router