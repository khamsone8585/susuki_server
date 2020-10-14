"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const slideClient_1 = __importDefault(require("../controller/slideClient"));
const router = express_1.Router();
router.route('/show-slide-banner-client')
    .get(slideClient_1.default.getSlide);
exports.default = router;
