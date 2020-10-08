"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const specProductsSchema = new mongoose_1.Schema({
    key: {
        type: String,
    }
}, { timestamps: true });
const specProduct = mongoose_1.model('specProduct', specProductsSchema, 'specProduct');
exports.default = specProduct;
