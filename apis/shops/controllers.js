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
        if (req.file){
            req.body.image = `http://${req.get("host")}/media/${req.file.filename}`
        }
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
        console.log(`Product name: ${req.body.name}`)
        if (req.file){
            req.body.image = `http://${req.get("host")}/media/${req.file.filename}`
        }
        const newProduct = await Product.create(req.body)
        console.log(`Product Created`)
        await Shop.findByIdAndUpdate(
            { _id: req.shop._id },
            { $push: {products: newProduct._id} }
        )
        return res.status(201).json(newProduct)
    } catch (error) {
        next(error)
    }
}

exports.getGetById = async (req, res, next) => {
    try {
        const targetShop = await req.shop.populate('products')
        return res.status(200).json(req.shop)
    } catch (error){
        next(error)
    }
}