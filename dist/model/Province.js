"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProvinceSchema = new mongoose_1.Schema({
    provinceName: {
        type: String,
        required: true
    }
}, { timestamps: true });
const Province = mongoose_1.model('Province', ProvinceSchema, 'Province');
exports.default = Province;
