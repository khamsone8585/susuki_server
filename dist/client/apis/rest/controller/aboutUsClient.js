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
const aboutUsClient = {
    showAboutUs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const showAboutUss = yield aboutUs_1.default.findOne().sort("-createdAt");
            res.status(200).json({ showAboutUss });
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
exports.default = aboutUsClient;
