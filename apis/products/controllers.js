let products = require("../../products")


const getProductList = (req, res) => {
    return res.json(products)
}


const addProductItem =  (req, res) => {
    products.push(req.body)
    return res.status(201).json(products[products.length-1])
}

const deleteProductItem = (req, res) => {
    const reqId = +req.params.productId
    let search = products.find(product => +product.id === reqId)
    if (!search) res.status(404).json('There nothing to delete')
    if (search){
        let tempproducts = products.filter(product => product.id !== reqId)
        products = tempproducts
        return res.status(204).end()
    }
}


module.exports = {getProductList, addProductItem, deleteProductItem}