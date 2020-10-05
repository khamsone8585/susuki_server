"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryBlog_1 = __importDefault(require("@/model/CategoryBlog"));
const categoryBlogController = {
    addCateBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { cateName } = req.body;
        try {
            if (!cateName)
                return res.status(400).json('Please Enter Category');
            const addCateBlogs = new CategoryBlog_1.default({
                cateName
            });
            yield addCateBlogs.save();
            res.status(200).json({ addCateBlogs });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    getCateBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getCateBlog = yield CategoryBlog_1.default.find();
            res.status(200).json({ getCateBlog });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    updateCateBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, cateName } = req.body;
        try {
            const updateCateBlogs = yield CategoryBlog_1.default.findByIdAndUpdate(id, {
                $set: {
                    cateName
                }
            }, { runValidators: true, new: true });
            res.status(200).json({ updateCateBlogs });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    deleteCateBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield CategoryBlog_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Success');
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    findIdBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield CategoryBlog_1.default.findById(id);
            res.status(200).json(findId);
        }
        catch (e) {
            throw new Error;
        }
    })
};
exports.default = categoryBlogController;