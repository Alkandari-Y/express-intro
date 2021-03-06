const Product = require("../../db/models/Product");
const removeImage = require('../../middleware/removeImage')

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.productListFetch = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.productDetailFetch = async (req, res, next) =>
  res.status(200).json(req.product);

exports.productCreate = async (req, res, next) => {
  try {
      if (req.file) {
          req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
      }
      const newProduct = await Product.create(req.body);
      return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.productUpdate = async (req, res, next) => {
    try {
        if (req.file) {
          req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
          await removeImage(req.product.image, next)
        }
    const product = await Product.findByIdAndUpdate(
      req.product,
      req.body,
      { new: true, runValidators: true }
    );
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.productDelete = async (req, res, next) => {
  try {
    await req.product.remove();
    await removeImage(req.product.image, next)
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};