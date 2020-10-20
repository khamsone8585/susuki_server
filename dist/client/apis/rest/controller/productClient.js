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
const Category_1 = __importDefault(require("@/model/Category"));
const groupProducts_1 = __importDefault(require("@/pipes/groupProducts"));
const productClient = {
    showProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const showProducts = yield Category_1.default.aggregate(groupProducts_1.default);
            const mapProducts = showProducts.map((i) => {
                const products = i.products.filter((o) => {
                    if (!o._id || !o.show)
                        return;
                    return o;
                });
                return Object.assign(Object.assign({}, i), { products });
            });
            res.status(200).json({ mapProducts });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    findIdProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield Products_1.default.findById(id);
            const productsCount = yield Products_1.default.findByIdAndUpdate(id, {
                $set: {
                    count: findId.count + 1
                }
            }, { runValidators: true, new: true });
            res.status(200).json(findId);
        }
        catch (e) {
            throw new Error;
        }
    }),
    getLimitProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const page = parseInt(req.params.page, 10);
        const perPage = parseInt(req.params.perPage, 5);
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
exports.default = productClient;
