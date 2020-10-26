"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aboutUsClient_1 = __importDefault(require("../controller/aboutUsClient"));
const router = express_1.Router();
router.route('/show-aboutUs-client')
    .get(aboutUsClient_1.default.showAboutUs);
exports.default = router;
