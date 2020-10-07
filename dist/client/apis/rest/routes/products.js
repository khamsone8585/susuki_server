"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productClient_1 = __importDefault(require("../controller/productClient"));
const router = express_1.Router();
router.route('/show-products-client')
    .get(productClient_1.default.showProduct);
exports.default = router;
