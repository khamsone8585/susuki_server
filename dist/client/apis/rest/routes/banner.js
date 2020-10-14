"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bannerClient_1 = __importDefault(require("../controller/bannerClient"));
const router = express_1.Router();
router.route('/show-banner-client')
    .get(bannerClient_1.default.showBanner);
exports.default = router;
