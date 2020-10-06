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
const Products_1 = __importDefault(require("@/model/Products"));
const productController = {
    addProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { categoryId, colorPic, name, price, tagId, info } = req.body;
        try {
            const addProducts = new Products_1.default({
                categoryId,
                colorPic,
                name,
                price,
                tagId,
                info
            });
            yield addProducts.save();
            res.status(200).json({ addProducts });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    getProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getProducts = yield Products_1.default.find().populate(['categoryId', 'tagId']);
            res.status(200).json({ getProducts });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    updateProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, categoryId, colorPic, name, price, tagId, info } = req.body;
        try {
            const updateProducts = yield Products_1.default.findByIdAndUpdate(id, {
                $set: {
                    categoryId,
                    colorPic,
                    name,
                    price,
                    tagId,
                    info
                }
            }, { runValidators: true, new: true });
            res.status(220).json({ updateProducts });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    deleteProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield Products_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Succeed');
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    findIdProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield Products_1.default.findById(id);
            res.status(200).json(findId);
        }
        catch (e) {
            throw new Error;
        }
    })
};
exports.default = productController;
