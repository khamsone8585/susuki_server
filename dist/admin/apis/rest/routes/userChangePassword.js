"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("@/middlewares/auth");
const userChangePassword_1 = __importDefault(require("../controllers/userChangePassword"));
const router = express_1.Router();
router.route('/update-user-change')
    .put(userChangePassword_1.default.updateUser);
router.route('/admin-sign-in')
    .post(auth_1.adminSignIn, userChangePassword_1.default.adminSignIn);
router.route('/findId-user/:id')
    .get(userChangePassword_1.default.findIdUser);
exports.default = router;
