"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = __importDefault(require("@/admin/apis/rest/controllers/blogController"));
const router = express_1.Router();
router.route('/create-blog')
    .post(blogController_1.default.addBlog);
router.route('/show-blogs')
    .get(blogController_1.default.showBlog);
router.route('/update-blog')
    .put(blogController_1.default.updateBlog);
router.route('/delete-blog/:id')
    .delete(blogController_1.default.deleteBlog);
router.route('/findId-blog/:id')
    .get(blogController_1.default.findIdBlog);
router.route('/get-limit-blogs/:page/:perPage')
    .get(blogController_1.default.getLimitBlog);
exports.default = router;
