"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categoryBlogSchema = new mongoose_1.Schema({
    cateName: {
        type: String,
        required: true
    },
    sortOrder: {
        type: Number,
        default: 0,
        required: true
    }
}, { timestamps: true });
const categoryBlog = mongoose_1.model('categoryBlog', categoryBlogSchema, 'categoryBlog');
exports.default = categoryBlog;
