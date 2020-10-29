"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const specproductsController_1 = __importDefault(require("../controllers/specproductsController"));
const router = express_1.Router();
router.route('/add-spec-products')
    .post(specproductsController_1.default.addSpec);
router.route('/get-spec-products')
    .get(specproductsController_1.default.getSpec);
router.route('/update-spec-products')
    .put(specproductsController_1.default.updateSpec);
router.route('/delete-spec-products/:id')
    .delete(specproductsController_1.default.deleteSpec);
router.route('/findId-spec-products/:id')
    .get(specproductsController_1.default.findIdSpec);
router.route('/sort-specProducts')
    .put(specproductsController_1.default.sortSpecProduct);
exports.default = router;
