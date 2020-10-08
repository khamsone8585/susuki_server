"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const slideController_1 = __importDefault(require("../controllers/slideController"));
const router = express_1.Router();
router.route('/add-slide-banner')
    .post(slideController_1.default.addSlide);
router.route('/show-slide-banner')
    .get(slideController_1.default.getSlide);
router.route('/update-slide-banner')
    .put(slideController_1.default.updateSlide);
router.route('/delete-slide-banner')
    .delete(slideController_1.default.deleteSlide);
exports.default = router;
