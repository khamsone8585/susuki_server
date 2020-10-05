"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provinceController_1 = __importDefault(require("../controllers/provinceController"));
const router = express_1.Router();
router.route('/show-province')
    .get(provinceController_1.default.getProvince);
exports.default = router;
