"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const aboutUsSchema = new mongoose_1.Schema({
    detail: {
        type: String
    }
}, { timestamps: true });
const aboutUs = mongoose_1.model('aboutUs', aboutUsSchema, 'aboutUs');
exports.default = aboutUs;
