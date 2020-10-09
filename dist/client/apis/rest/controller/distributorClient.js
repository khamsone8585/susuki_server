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
const Distributors_1 = __importDefault(require("@/model/Distributors"));
const distributorClient = {
    showDistributor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const showDistributors = yield Distributors_1.default.find().populate({
                path: 'districtId',
                populate: 'provinceId'
            });
            res.status(200).json({ showDistributors });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    findIdProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            console.log(id);
            const findId = yield Distributors_1.default.findById(id).populate({
                path: 'districtId',
                populate: 'provinceId'
            });
            res.status(200).json({ findId });
        }
        catch (e) {
            throw new Error;
        }
    }),
    getLimitDistributor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const page = parseInt(req.params.page, 10);
        const perPage = parseInt(req.params.perPage, 5);
        try {
            const distributors = yield Distributors_1.default.find()
                .skip((page * perPage) - perPage)
                .limit(perPage)
                .populate({
                path: 'districtId',
                populate: 'provinceId'
            });
            const counts = yield Distributors_1.default.find().countDocuments();
            res.status(200).json({ distributors, counts });
        }
        catch (e) {
            throw new Error(e);
        }
    })
};
exports.default = distributorClient;
