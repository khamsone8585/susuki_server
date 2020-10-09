"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogClient_1 = __importDefault(require("../controller/blogClient"));
const router = express_1.Router();
router.route('/show-blog-client')
    .get(blogClient_1.default.showBlog);
router.route('/find-blog-client/:id')
    .get(blogClient_1.default.findIdProducts);
exports.default = router;
