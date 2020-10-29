"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
const router = express_1.Router();
router.route('/add-category')
    .post(categoryController_1.default.addCategory);
router.route('/show-category')
    .get(categoryController_1.default.getCategory);
router.route('/update-category')
    .put(categoryController_1.default.updateCategory);
router.route('/delete-category/:id')
    .delete(categoryController_1.default.deleteCategory);
router.route('/findId-category/:id')
    .get(categoryController_1.default.findIdCategory);
router.route('/sort-category')
    .put(categoryController_1.default.sortCategory);
exports.default = router;
