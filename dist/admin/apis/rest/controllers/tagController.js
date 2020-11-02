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
            const sort = yield Tag_1.default.findOne().sort('-createdAt');
            if (!sort) {
                const addCateBlogs = new Tag_1.default({
                    tagName
                });
                yield addCateBlogs.save();
                res.status(200).json({ addCateBlogs });
            }
            else {
                const plusOrder = yield Tag_1.default.findOne().sort('-sortOrder');
                const addCateBlogs = new Tag_1.default({
                    tagName,
                    sortOrder: plusOrder.sortOrder + 1
                });
                yield addCateBlogs.save();
                res.status(200).json({ addCateBlogs });
            }
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    getTag: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getTags = yield Tag_1.default.find().sort('sortOrder');
            res.status(200).json({ getTags });
        }
        catch (e) {
            res.status(400).json(e);
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
            res.status(400).json(e);
        }
    }),
    deleteTag: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield Tag_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Success');
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    findIdTag: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield Tag_1.default.findById(id);
            res.status(200).json(findId);
        }
        catch (e) {
            throw new Error;
        }
    }),
    sortTag: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { items } = req.body;
        try {
            yield Promise.all(items.map((i, index) => __awaiter(void 0, void 0, void 0, function* () {
                yield Tag_1.default.findByIdAndUpdate(i._id, {
                    $set: {
                        sortOrder: index
                    }
                });
            })));
            res.status(200).json('Success');
        }
        catch (e) {
            res.status(400).json(e);
        }
    })
};
exports.default = tagController;
