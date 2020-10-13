"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("@/middlewares/auth");
const userController_1 = __importDefault(require("../controllers/userController"));
const router = express_1.Router();
router.route('/create-user')
    .post(auth_1.adminSignIn, userController_1.default.addUser);
router.route('/get-user')
    .get(auth_1.adminSignIn, userController_1.default.getUser);
router.route('/update-user')
    .put(auth_1.adminSignIn, userController_1.default.updateUser);
router.route('/delete-user/:id')
    .delete(auth_1.adminSignIn, userController_1.default.deleteUser);
router.route('/admin-sign-in')
    .post(auth_1.adminSignIn, userController_1.default.adminSignIn);
router.route('/findId-user/:id')
    .get(auth_1.adminSignIn, userController_1.default.findIdUser);
exports.default = router;
