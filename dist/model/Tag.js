"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tagSchema = new mongoose_1.Schema({
    tagName: {
        type: String,
        required: true
    },
    sortOrder: {
        type: Number,
        default: 0,
        required: true
    }
}, { timestamps: true });
const tag = mongoose_1.model('tag', tagSchema, 'tag');
exports.default = tag;
