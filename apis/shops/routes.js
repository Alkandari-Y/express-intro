const express = require("express");
const router = express.Router();

const Shop = require("../../db/models/Shop")

const upload = require('../../middleware/multer')

const {
    shopCreate,
    shopListFetch,
    createProduct,
    fetchShop
} = require("./controllers")

router.param('shopId', async (req, res, next, shopId) => {
    const shop = await fetchShop(shopId, next);
    if (shop) {
        req.shop = shop;
        next();
    } else {
        next({status: 404, message: "Shop Not Found!"})
    }
})

router.post("/:shopId/products", createProduct);

router.post("/", shopCreate);

router.get("/", shopListFetch);

module.exports = router;