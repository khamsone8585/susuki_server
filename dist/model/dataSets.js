"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSetupSchema = new mongoose_1.Schema({
    logo: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    callCenter: {
        type: String,
        required: true
    },
    workingDay: {
        type: String,
        required: true
    },
    workingTimes: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    districtId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'District'
    },
    moreInformation: {
        type: String,
        required: true
    }
}, { timestamps: true });
const dataSets = mongoose_1.model('dataSets', DataSetupSchema, 'dataSets');
exports.default = dataSets;
