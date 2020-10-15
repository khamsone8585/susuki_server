"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bannerSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
    }
}, { timestamps: true });
const banner = mongoose_1.model('banner', bannerSchema, 'banner');
exports.default = banner;
