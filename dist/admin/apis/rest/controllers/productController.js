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
        const { categoryId, colorPic, name, price, tagId, show, info } = req.body;
        try {
            const addProducts = new Products_1.default({
                categoryId,
                colorPic,
                name,
                price,
                tagId,
                show,
                info
            });
            yield addProducts.save();
            res.status(200).json({ addProducts });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    getProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name } = req.query;
        try {
            const getProducts = yield Products_1.default.find({ name: { $regex: name, $options: "i" } }).populate(['categoryId', 'tagId']);
            res.status(200).json({ getProducts });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    updateProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, categoryId, colorPic, name, price, tagId, show, info } = req.body;
        try {
            const updateProducts = yield Products_1.default.findByIdAndUpdate(id, {
                $set: {
                    categoryId,
                    colorPic,
                    name,
                    price,
                    tagId,
                    show,
                    info
                }
            }, { runValidators: true, new: true });
            res.status(220).json({ updateProducts });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    deleteProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield Products_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Succeed');
        }
        catch (e) {
            res.status(400).json(e);
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
    }),
    getLimitProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const page = parseInt(req.params.page, 10);
        const perPage = parseInt(req.params.perPage, 10);
        try {
            const Products = yield Products_1.default.find()
                .skip((page * perPage) - perPage)
                .limit(perPage)
                .populate(['categoryId', 'tagId']);
            const counts = yield Products_1.default.find().countDocuments();
            res.status(200).json({ Products, counts });
        }
        catch (e) {
            throw new Error(e);
        }
    })
};
exports.default = productController;
