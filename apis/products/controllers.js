const Product = require("../../db/models/Product")

const fetchProduct = async (productId) => {
    try {
        const product = await Product.findById(productId)
        return product
    } catch (err) {
        next(err)
    }
}

const getProductList = async (req, res, next) => {
    try {
        const allProducts = await Product.find()
        return res.json(allProducts)
    } catch (err) {
        next(err)
    }
}

const addProductItem =  async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body)
        return res.status(201).json(newProduct)
    } catch (err) {
        next(err)
        // console.log(err)
        // return res.status(500).json({message: "Theres an error in the post, review the post!"})
    }
}

const getProductDetails = async (req, res, next) => {
    return await res.status(200).json(req.product)
}

const updateProductItem = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.product,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        return res.status(200).json(product)
    } catch (err) {
        next(err)
    }
    // const { productId } = req.params
    // try {
    //     const updatedProduct = await Product.findByIdAndUpdate({ _id: productId }, req.body, { new: true, runValidators: true })
    //     if (updatedProduct) {
    //         return res.json(updatedProduct)
    //     } else {
    //         // return res.status(404).json({ message: "Product Not Found" })
    //         next({
    //             status: 404,
    //             message: "Product Not Found!"
    //         })
    //     }
    // } catch (err) {
    //     next(err)
        // console.log(err)
        // return res.status(500).json({message: `${err}`})
    // }
}

const deleteProductItem = async (req, res, next) => {
    try {
        await Product.remove(req.product);
        return res.status(204).end()
    } catch (err) {
        next(err)
    }
    // const { productId } = req.params
    // try {
    //     const deletedProduct = await Product.findByIdAndDelete({_id: productId})
    //     if (deletedProduct) {
    //         return res.status(204).end()
    //     } else {
    //         // return res.status(404).json('Product Not Found')
    //         next({
    //             status: 404,
    //             message: "Product Not Found!"
    //         })
    //     }
    // } catch(err) {
    //     next(err)
    // }
}

// const deleteProductItem = async(req, res) => {
//     const reqId = req.params.productId
//     try {
//         const foundProduct = await Product.findById(reqId)
//         if (foundProduct) {
//             foundProduct.remove()
//             return res.status(204).end()
//         } else {
//             return res.status(404).json('There nothing to delete')
//         }
//     } catch(err) {
//         console.log(err)
//     }
// }

// const updateProductItem = async (req, res) => {
//     const reqId = req.params.productId
//     try {
//         const foundProduct = await Product.findById(reqId)
//         if (foundProduct) {
//             await foundProduct.updateOne(req.body, {new: true})
//             return res.status(200).json(foundProduct)
//         } else {
//             return res.status(404).json({message: "Not Found"})
//         }
//     } catch(err) {
//         console.log(err)
//         return res.status(500).json({message: `${err}`})
//     }
// }

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

module.exports = {
    fetchProduct,
    getProductList,
    addProductItem,
    deleteProductItem,
    updateProductItem,
    getProductDetails
}