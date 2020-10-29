"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const specProductsSchema = new mongoose_1.Schema({
    key: {
        type: String,
    },
    sortOrder: {
        type: Number,
        default: 0,
        required: true
    }
}, { timestamps: true });
const specProduct = mongoose_1.model('specProduct', specProductsSchema, 'specProduct');
exports.default = specProduct;
