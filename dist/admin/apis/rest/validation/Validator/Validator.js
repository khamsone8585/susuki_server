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
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../Schema/schema");
const blogValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema_1.blogSchema.validateAsync(req.body);
    }
    catch (e) {
        return res.status(400).json({ error: e.details[0].message });
    }
    next();
});
const distributorValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema_1.distributorSchema.validateAsync(req.body);
    }
    catch (e) {
        return res.status(400).json({ error: e.details[0].message });
    }
    next();
});
const productsValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema_1.productsSchema.validateAsync(req.body);
    }
    catch (e) {
        return res.status(400).json({ error: e.details[0].message });
    }
    next();
});
const userValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema_1.userSchema.validateAsync(req.body);
    }
    catch (e) {
        return res.status(400).json({ error: e.details[0].message });
    }
    next();
});
const bannerValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema_1.bannerSchema.validateAsync(req.body);
    }
    catch (e) {
        return res.status(400).json({ error: e.details[0].message });
    }
});
