"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    colorPic: [{
            imageName: {
                type: String,
                required: true
            },
            colorName: {
                type: String,
                required: true
            }
        }],
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    show: {
        type: Boolean,
        default: true,
        required: true
    },
    tagId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'tag'
    },
    info: [{
            key: {
                type: String,
            },
            value: {
                type: String,
            }
        }]
}, { timestamps: true });
const products = mongoose_1.model('products', productsSchema, 'products');
exports.default = products;
