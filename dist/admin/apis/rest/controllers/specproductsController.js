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
const specProducts_1 = __importDefault(require("@/model/specProducts"));
const specProductsController = {
    addSpec: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { key } = req.body;
        try {
            const addSpecs = new specProducts_1.default({
                key
            });
            yield addSpecs.save();
            res.status(200).json({ addSpecs });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    getSpec: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getSpecs = yield specProducts_1.default.find();
            res.status(200).json({ getSpecs });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    updateSpec: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, key } = req.body;
        try {
            const updateSpecs = yield specProducts_1.default.findByIdAndUpdate(id, {
                $set: {
                    key
                }
            }, { runValidators: true, new: true });
            res.status(200).json({ updateSpecs });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    deleteSpec: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield specProducts_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Success');
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    findIdSpec: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield specProducts_1.default.findById(id);
            res.status(200).json(findId);
        }
        catch (e) {
            throw new Error;
        }
    }),
    sortSpecProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { items } = req.body;
        try {
            yield Promise.all(items.map((i, index) => __awaiter(void 0, void 0, void 0, function* () {
                yield specProducts_1.default.findByIdAndUpdate(i._id, {
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
exports.default = specProductsController;
