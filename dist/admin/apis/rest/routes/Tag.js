"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tagController_1 = __importDefault(require("../controllers/tagController"));
const router = express_1.Router();
router.route('/create-tag')
    .post(tagController_1.default.addTag);
router.route('/get-tag')
    .get(tagController_1.default.getTag);
router.route('/update-tag')
    .put(tagController_1.default.updateTag);
router.route('/delete-tag/:id')
    .delete(tagController_1.default.deleteTag);
router.route('/findId-tag/:id')
    .get(tagController_1.default.findIdTag);
router.route('/sort-tag')
    .put(tagController_1.default.sortTag);
exports.default = router;
