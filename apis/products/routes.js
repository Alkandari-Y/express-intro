const express = require('express')
const router = express.Router()
const {
    fetchProduct,
    getProductList,
    addProductItem,
    deleteProductItem,
    updateProductItem,
    getProductDetails
} = require("./controllers")

router.param("productId", async (req, res, next, productId) => {
    const product = await fetchProduct(productId, next)
    if (product){
        req.product = product
        next()
    } else {
        next({
            status: 404,
            message: "product not found"
        })
    }
    next()
})

router.get("/", getProductList)

router.post("/", addProductItem)

router.get("/:productId", getProductDetails )

router.delete("/:productId", deleteProductItem)

router.put("/:productId", updateProductItem )



module.exports = router