"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catetogoryblogController_1 = __importDefault(require("../controllers/catetogoryblogController"));
const router = express_1.Router();
router.route('/create-categoryblog')
    .post(catetogoryblogController_1.default.addCateBlog);
router.route('/showcateblog')
    .get(catetogoryblogController_1.default.getCateBlog);
router.route('/updatecateblog')
    .put(catetogoryblogController_1.default.updateCateBlog);
router.route('/deletecateblog/:id')
    .delete(catetogoryblogController_1.default.deleteCateBlog);
router.route('/findId-cateblog/:id')
    .get(catetogoryblogController_1.default.findIdBlog);
exports.default = router;
