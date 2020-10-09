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
    findIdProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            console.log(id);
            const findId = yield Blog_1.default.findById(id);
            res.status(200).json({ findId });
        }
        catch (e) {
            throw new Error;
        }
    })
};
//export file controller
exports.default = blogClient;
