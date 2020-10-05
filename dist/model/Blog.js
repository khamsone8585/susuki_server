"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'categoryBlog'
    }
}, { timestamps: true });
const Blogs = mongoose_1.model('Blogs', BlogSchema, 'Blogs');
exports.default = Blogs;
