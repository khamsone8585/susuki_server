"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSetupSchema = new mongoose_1.Schema({
    logo: {
        type: String,
    },
    companyName: {
        type: String,
    },
    detail: {
        type: String,
    },
    workingDay: {
        type: String,
    },
    address: {
        type: String,
    },
    moreInformation: {
        type: String,
    }
}, { timestamps: true });
const dataSets = mongoose_1.model('dataSets', DataSetupSchema, 'dataSets');
exports.default = dataSets;
