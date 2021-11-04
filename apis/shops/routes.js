const express = require("express");
const passport = require("passport");
const router = express.Router();

const Shop = require("../../db/models/Shop")

const upload = require('../../middleware/multer')


const {
    shopCreate,
    shopListFetch,
    createProduct,
    fetchShop,
    getGetById
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

router.post("/:shopId/products", passport.authenticate('jwt', {session: false}), upload.single('image'), createProduct);

router.get("/:shopId", getGetById)

router.post("/", passport.authenticate('jwt', {session: false}),upload.single('image'), shopCreate);

router.get("/", shopListFetch);



module.exports = router;