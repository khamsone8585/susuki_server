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
const Tag_1 = __importDefault(require("@/model/Tag"));
const tagController = {
    addTag: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { tagName } = req.body;
        try {
            if (!tagName)
                return res.status(400).json('Please Enter Tag');
            const addTags = new Tag_1.default({
                tagName
            });
            yield addTags.save();
            res.status(200).json({ addTags });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    getTag: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getTags = yield Tag_1.default.find();
            res.status(200).json({ getTags });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    updateTag: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, tagName } = req.body;
        try {
            const updateTags = yield Tag_1.default.findByIdAndUpdate(id, {
                $set: {
                    tagName
                }
            }, { runValidators: true, new: true });
            res.status(220).json({ updateTags });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    deleteTag: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield Tag_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Success');
        }
        catch (e) {
            throw new Error(e);
        }
    })
};
exports.default = tagController;
