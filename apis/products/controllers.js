const Product = require("../../db/models/Product")
let products = require("../../products")

const getProductList = async (req, res) => {
    const allProducts = await Product.find()
    return res.json(allProducts)
}


const addProductItem =  async (req, res) => {
    // products.push(req.body)
    // return res.status(201).json(products[products.length-1])
    try {
        const newProduct = await Product.create(req.body)
        return res.status(201).json(newProduct)
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: "Theres an error in the post, review the post!"})
    }
}

const deleteProductItem = async(req, res) => {
    
    // let search = products.find(product => +product.id === reqId)
    // if (!search) res.status(404).json('There nothing to delete')
    // if (search){
    //     let tempproducts = products.filter(product => product.id !== reqId)
    //     products = tempproducts
    //     return res.status(204).end()
    // }
    try {
        const reqId = req.params.productId
        const foundProduct = await Product.findById(reqId)
        if (foundProduct) {
            foundProduct.remove()
            return res.status(204).end()
        } else {
            res.status(404).json('There nothing to delete')
        }
    } catch(err) {
        console.log(err)
    }
}

const updateProductItem = async(req, res) => {
    try {
        const reqId = req.params.productId
        const foundProduct = await Product.findById(reqId)
        if (foundProduct) {
            await foundProduct.updateOne(req.body, {new: true})
            return res.status(204).json(foundProduct)
        } else {
            res.status(404).json({message: "Not Found"})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({message: `${err}`})
    }
}


module.exports = {getProductList, addProductItem, deleteProductItem, updateProductItem}