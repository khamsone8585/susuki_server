"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const slideSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
}, { timestamps: true });
const slidebanner = mongoose_1.model('slidebanner', slideSchema, 'slidebanner');
exports.default = slidebanner;
