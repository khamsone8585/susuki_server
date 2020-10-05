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
const Category_1 = __importDefault(require("@/model/Category"));
const categoryController = {
    addCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { cateName, } = req.body;
        try {
            if (!cateName)
                return res.status(400).json('Please Enter Category');
            const addCategorys = new Category_1.default({
                cateName,
            });
            yield addCategorys.save();
            res.status(200).json({ addCategorys });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    getCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getCategory = yield Category_1.default.find();
            res.status(200).json({ getCategory });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    updateCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, cateName } = req.body;
        try {
            const updateCategorys = yield Category_1.default.findByIdAndUpdate(id, {
                $set: {
                    cateName
                }
            }, { runValidators: true, new: true }).populate(['usersId']);
            res.status(200).json({ updateCategorys });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    deleteCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield Category_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Succeed');
        }
        catch (e) {
            throw new Error(e);
        }
    })
};
exports.default = categoryController;
