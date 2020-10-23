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
const aboutUs_1 = __importDefault(require("@/model/aboutUs"));
const aboutUsController = {
    addAboutUs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { detail } = req.body;
        try {
            const addAboutUss = new aboutUs_1.default({
                detail
            });
            yield addAboutUss.save();
            res.status(200).json({ addAboutUss });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    showAboutUs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const showAboutUss = yield aboutUs_1.default.findOne();
            res.status(200).json({ showAboutUss });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    updateAboutUs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, detail } = req.body;
        try {
            const updateAboutUss = yield aboutUs_1.default.findOneAndUpdate({}, {
                $set: {
                    detail
                }
            }, { runValidators: true, new: true });
            res.status(200).json({ updateAboutUss });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    deleteAboutUs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield aboutUs_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Success');
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    findIdAboutUs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield aboutUs_1.default.findById(id);
            res.status(200).json({ findId });
        }
        catch (e) {
            res.status(400).json(e);
        }
    })
};
exports.default = aboutUsController;
