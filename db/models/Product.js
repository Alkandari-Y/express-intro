const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    
    image: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },
    
    color: {
        type: String,
        required: true
    },
    
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Product", ProductSchema)