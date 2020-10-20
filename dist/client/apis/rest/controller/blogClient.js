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
//import use module
//create Controller
const blogClient = {
    showBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const showBlogs = yield Blog_1.default.find().populate(['categoryId']);
            res.status(200).json({ showBlogs });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    findIdBlogClient: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield Blog_1.default.findById(id);
            console.log(findId);
            const blogCount = yield Blog_1.default.findByIdAndUpdate(id, {
                $set: {
                    count: findId.count + 1
                }
            }, { runValidators: true, new: true });
            res.status(200).json({ findId: blogCount });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    getLimitBlogClient: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const page = parseInt(req.params.page, 10);
        const perPage = parseInt(req.params.perPage, 5);
        try {
            const Products = yield Blog_1.default.find()
                .skip((page * perPage) - perPage)
                .limit(perPage)
                .populate(['categoryId']);
            const counts = yield Blog_1.default.find().countDocuments();
            res.status(200).json({ Products, counts });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    getLimitBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const page = parseInt(req.params.page, 10);
        const perPage = parseInt(req.params.perPage, 5);
        try {
            const Blog = yield Blog_1.default.find()
                .skip((page * perPage) - perPage)
                .limit(perPage)
                .populate(['categoryId']);
            const counts = yield Blog_1.default.find().countDocuments();
            res.status(200).json({ Blog, counts });
        }
        catch (e) {
            throw new Error(e);
        }
    })
};
//export file controller
exports.default = blogClient;
