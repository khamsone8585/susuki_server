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
const Blog_1 = __importDefault(require("@/model/Blog"));
const blogController = {
    addBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { title, image, descriptions, categoryId } = req.body;
        try {
            // if(!title) return res.status(400).json('Please Enter Category')
            const addBlogs = new Blog_1.default({
                title,
                image,
                descriptions,
                categoryId
            });
            yield addBlogs.save();
            res.status(200).json({ addBlogs });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    showBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { title } = req.query;
        try {
            const showBlogs = yield Blog_1.default.find({ title: { $regex: title, $options: "i" } }).populate(['categoryId']);
            res.status(200).json({ showBlogs });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    updateBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, title, image, descriptions, categoryId } = req.body;
        try {
            const updateBlogs = yield Blog_1.default.findByIdAndUpdate(id, {
                $set: {
                    title,
                    image,
                    descriptions,
                    categoryId
                }
            }, { runValidators: true, new: true }).populate(['categoryId']);
            res.status(220).json({ updateBlogs });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    deleteBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield Blog_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Complete');
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    findIdBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findIdBlogs = yield Blog_1.default.findById(id).populate(['categoryId']);
            res.status(200).json(findIdBlogs);
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    getLimitBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const page = parseInt(req.params.page, 10);
        const perPage = parseInt(req.params.perPage, 5);
        const { title } = req.query;
        try {
            const Blog = yield Blog_1.default.find({ title: { $regex: title, $options: "i" } })
                .skip((page * perPage) - perPage)
                .limit(perPage)
                .populate(['categoryId']);
            const counts = yield Blog_1.default.find({ title: { $regex: title, $options: "i" } }).countDocuments();
            res.status(200).json({ Blog, counts });
        }
        catch (e) {
            throw new Error(e);
        }
    })
};
exports.default = blogController;
