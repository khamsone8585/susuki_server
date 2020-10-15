"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const router = express_1.Router();
router.route('/create-user')
    .post(userController_1.default.addUser);
router.route('/get-user')
    .get(userController_1.default.getUser);
router.route('/update-user')
    .put(userController_1.default.updateUser);
router.route('/delete-user/:id')
    .delete(userController_1.default.deleteUser);
router.route('/current-user')
    .get(userController_1.default.getCurrentUser);
router.route('/findId-user/:id')
    .get(userController_1.default.findIdUser);
exports.default = router;
