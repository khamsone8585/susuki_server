"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bannerController_1 = __importDefault(require("../controllers/bannerController"));
const router = express_1.Router();
router.route('/add-banner')
    .post(bannerController_1.default.addBanner);
router.route('/show-banner')
    .get(bannerController_1.default.getBanner);
router.route('/update-banner')
    .put(bannerController_1.default.updateBanner);
router.route('/delete-banner/:id')
    .delete(bannerController_1.default.deleteBanner);
router.route('/findid-banner/:id')
    .get(bannerController_1.default.findIdBanner);
exports.default = router;
