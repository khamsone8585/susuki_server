"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    cateName: {
        type: String,
        required: true
    },
    show: {
        type: Boolean,
        default: true,
        required: true
    },
}, { timestamps: true });
const Category = mongoose_1.model('Category', CategorySchema, 'Category');
exports.default = Category;
