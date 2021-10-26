const mongoose = require("mongoose")
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const ProductSchema = mongoose.Schema({
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
        default: 0
    },
    price: {
        type: Number,
        default: 5,
    }
},
{
    timestamps: true,
}
)

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
module.exports = mongoose.model("Product", ProductSchema)