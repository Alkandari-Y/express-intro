const express = require('express')
const router = express.Router()
const {getProductList, addProductItem, deleteProductItem} = require("./controllers")



let products = require("../../products")

router.get("/", getProductList)

router.post("/", addProductItem)

router.delete("/:productId", deleteProductItem)


module.exports = router