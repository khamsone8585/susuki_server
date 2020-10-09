"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataSetup_1 = __importDefault(require("../controller/dataSetup"));
const router = express_1.Router();
router.route('/show-dataset-client')
    .get(dataSetup_1.default.getDatasets);
exports.default = router;
