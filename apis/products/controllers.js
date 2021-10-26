const Product = require("../../db/models/Product")

const getProductList = async (req, res) => {
    const allProducts = await Product.find()
    return res.json(allProducts)
}


const addProductItem =  async (req, res) => {
    try {
        const newProduct = await Product.create(req.body)
        return res.status(201).json(newProduct)
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: "Theres an error in the post, review the post!"})
    }
}

const deleteProductItem = async(req, res) => {
    const reqId = req.params.productId
    try {
        const foundProduct = await Product.findById(reqId)
        if (foundProduct) {
            foundProduct.remove()
            return res.status(204).end()
        } else {
            return res.status(404).json('There nothing to delete')
        }
    } catch(err) {
        console.log(err)
    }
}

const updateProductItem = async (req, res) => {
    const reqId = req.params.productId
    try {
        const foundProduct = await Product.findById(reqId)
        if (foundProduct) {
            await foundProduct.updateOne(req.body, {new: true})
            return res.status(200).json(foundProduct)
        } else {
            return res.status(404).json({message: "Not Found"})
        }
    } catch(err) {
        console.log(err)
        return res.status(500).json({message: `${err}`})
    }
}

//or

// const updateProductItem = async (req, res) => {
//     try {
//       const id = req.params.productId;
//       const product = Product.findById(id);
//       if (product) {
//         const updatedRecord = await Product.findOneAndUpdate(
//           { id: id },
//           req.body,
//           {
//             new: true,
//           }
//         );
//         res.statusCode = 200;
//         return res.json(updatedRecord);
//       }
//     } catch (error) {
//       console.log(error);
//       res.statusCode = 500;
//       return res.json().end();
//     }
//   };


module.exports = {getProductList, addProductItem, deleteProductItem, updateProductItem}