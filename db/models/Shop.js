const { Schema, model } = require("mongoose")
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const ShopSchema = Schema({
    name: {
            type: String,
            required: true
        },
    image: {
            type: String,
            required: true
        },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
    },
        {
            timestamps: true,
        }
)

ShopSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
module.exports = model("Shop", ShopSchema)