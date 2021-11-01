const Shop = require("../../db/models/Shop")
const Product = require("../../db/models/Product")
const removeImage = require('../../middleware/removeImage')

exports.fetchShop = async (shopId, next) => {
    try {
      const shop = await Shop.findById(shopId);
      return shop;
    } catch (error) {
      next(error);
    }
  };

exports.shopCreate = async (req, res, next) => {
    try {
        const newShop = await Shop.create(req.body)
        return res.status(201).json(newShop)
    } catch (error) {
        next(error)
    }
}

exports.shopListFetch = async (req, res, next) => {
    try {

        const shopsList = await Shop.find().populate('products');
        return res.status(200).json(shopsList)
    } catch (error) {
        next(error)
    }
}

exports.createProduct = async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body)
        await Shop.findByIdAndUpdate(
            { _id: req.shop._id },
            { $push: {products: newProduct._id} }
        )
        return res.status(201).json(newProduct)
    } catch (error) {
        next(err)
    }
}