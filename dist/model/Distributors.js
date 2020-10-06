"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const distributorSchema = new mongoose_1.Schema({
    districtId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'District'
    },
    map: [{
            lat: {
                type: Number,
            },
            lng: {
                type: Number,
            }
        }],
    image: {
        type: String,
        required: true
    },
    dealerCompany: {
        type: String,
        required: true
    },
    village: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    }
}, { timestamps: true });
const distributors = mongoose_1.model('distributors', distributorSchema, 'distributors');
exports.default = distributors;
