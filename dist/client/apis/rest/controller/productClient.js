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
            res.status(200).json({ showProducts });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    findIdProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            console.log(id);
            const findId = yield Products_1.default.findById(id);
            res.status(200).json(findId);
        }
        catch (e) {
            throw new Error;
        }
    })
};
exports.default = productClient;
