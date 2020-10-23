"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aboutusController_1 = __importDefault(require("../controllers/aboutusController"));
const router = express_1.Router();
router.route('/add-aboutUs')
    .post(aboutusController_1.default.addAboutUs);
router.route('/show-aboutUs')
    .get(aboutusController_1.default.showAboutUs);
router.route('/update-aboutUs')
    .put(aboutusController_1.default.updateAboutUs);
router.route('/delete-aboutUs/:id')
    .delete(aboutusController_1.default.deleteAboutUs);
router.route('/getId-aboutUs/:id')
    .get(aboutusController_1.default.findIdAboutUs);
exports.default = router;
