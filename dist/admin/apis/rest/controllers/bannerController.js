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
const banner_1 = __importDefault(require("@/model/banner"));
const bannerController = {
    addBanner: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { image, url } = req.body;
        try {
            const addBanners = new banner_1.default({
                image,
                url
            });
            yield addBanners.save();
            res.status(200).json({ addBanners });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    getBanner: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getBanners = yield banner_1.default.find();
            res.status(200).json({ getBanners });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    updateBanner: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, image, url } = req.body;
        try {
            const updateBanners = yield banner_1.default.findByIdAndUpdate(id, {
                image,
                url
            }, { runValidators: true, new: true });
            res.status(200).json({ updateBanners });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    deleteBanner: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield banner_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Complete');
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    findIdBanner: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield banner_1.default.findById(id);
            res.status(200).json(findId);
        }
        catch (e) {
            res.status(400).json(e);
        }
    })
};
exports.default = bannerController;
