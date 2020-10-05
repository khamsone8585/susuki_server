"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const districtSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    provinceId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Province'
    }
}, { timestamps: true });
const District = mongoose_1.model('District', districtSchema, 'District');
exports.default = District;
