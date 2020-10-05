"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const router = express_1.Router();
router.route('/create-products')
    .post(productController_1.default.addProducts);
router.route('/show-products')
    .get(productController_1.default.getProducts);
router.route('/update-products')
    .put(productController_1.default.updateProducts);
router.route('/delete-products/:id')
    .delete(productController_1.default.deleteProducts);
router.route('/findId-products/:id')
    .get(productController_1.default.findIdProducts);
exports.default = router;
