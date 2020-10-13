"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const auth_1 = require("@/middlewares/auth");
const router = express_1.Router();
router.route('/admin-sign-in')
    .post(auth_1.adminLogin, userController_1.default.adminSignIn);
exports.default = router;
