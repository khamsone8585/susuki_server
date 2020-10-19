"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("@/model/User"));
const bcrypt_1 = require("@/utils/bcrypt");
const bcrypt_2 = require("@/utils/bcrypt");
const userController = {
    // syntax Query data from mongo  
    getUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getUsers = yield User_1.default.find();
            res.status(200).json({ getUsers });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, password, newPassword } = req.body;
        try {
            const userChange = yield User_1.default.findById(id);
            const isMatch = bcrypt_2.compareHash(password, userChange.password);
            if (isMatch) {
                const md5Password = bcrypt_1.genHash(newPassword);
                const updateUsers = yield User_1.default.findByIdAndUpdate(id, {
                    $set: {
                        password: md5Password,
                    }
                }, { runValidators: true, new: true });
                res.status(200).json({ updateUsers });
            }
            else {
                res.status(400).json('Password Wrong !!!');
            }
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    findIdUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const findId = yield User_1.default.findById(id);
            res.status(200).json(findId);
        }
        catch (e) {
            res.status(400).json(e);
        }
    })
};
exports.default = userController;
