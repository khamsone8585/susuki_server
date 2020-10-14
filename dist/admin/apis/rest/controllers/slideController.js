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
const slidebanner_1 = __importDefault(require("@/model/slidebanner"));
const slideController = {
    addSlide: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { image, url } = req.body;
        try {
            const addSlides = new slidebanner_1.default({
                image,
                url
            });
            yield addSlides.save();
            res.status(200).json({ addSlides });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    getSlide: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getSlides = yield slidebanner_1.default.find();
            res.status(200).json({ getSlides });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    updateSlide: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, image, url } = req.body;
        try {
            const updateSlides = yield slidebanner_1.default.findByIdAndUpdate(id, {
                $set: {
                    image,
                    url
                }
            }, { runValidators: true, new: true });
            res.status(220).json({ updateSlides });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    deleteSlide: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield slidebanner_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Success');
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    findIdSlide: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield slidebanner_1.default.findById(id);
            res.status(200).json(findId);
        }
        catch (e) {
            res.status(400).json(e);
        }
    })
};
exports.default = slideController;
