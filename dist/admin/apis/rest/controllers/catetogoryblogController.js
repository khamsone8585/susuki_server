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
            const sort = yield CategoryBlog_1.default.findOne().sort('-createdAt');
            if (!sort) {
                const addCateBlogs = new CategoryBlog_1.default({
                    cateName
                });
                yield addCateBlogs.save();
                res.status(200).json({ addCateBlogs });
            }
            else {
                const plusOrder = yield CategoryBlog_1.default.findOne().sort('-sortOrder');
                const addCateBlogs = new CategoryBlog_1.default({
                    cateName,
                    sortOrder: plusOrder.sortOrder + 1
                });
                yield addCateBlogs.save();
                res.status(200).json({ addCateBlogs });
            }
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    getCateBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getCateBlog = yield CategoryBlog_1.default.find().sort('sortOrder');
            res.status(200).json({ getCateBlog });
        }
        catch (e) {
            res.status(400).json(e);
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
            res.status(400).json(e);
        }
    }),
    deleteCateBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield CategoryBlog_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Success');
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    findIdBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield CategoryBlog_1.default.findById(id);
            res.status(200).json(findId);
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    sortBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { items } = req.body;
        try {
            yield Promise.all(items.map((i, index) => __awaiter(void 0, void 0, void 0, function* () {
                yield CategoryBlog_1.default.findByIdAndUpdate(i._id, {
                    $set: {
                        sortOrder: index
                    }
                });
            })));
            res.status(200).json('Success');
        }
        catch (e) {
            res.status(400).json(e);
        }
    })
};
exports.default = categoryBlogController;
