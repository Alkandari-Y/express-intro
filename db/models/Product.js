const { Schema, model } = require("mongoose")
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const ProductSchema = Schema({
    name: {
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
        default: 0,
        min: 0
    },
    price: {
        type: Number,
        default: 5,
        min: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Shop'
    }
},
{
    timestamps: true,
}
)

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
module.exports = model("Product", ProductSchema)