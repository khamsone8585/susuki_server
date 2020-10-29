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
const jwt_1 = require("@/utils/jwt");
const Generate_1 = require("@/utils/Generate");
const nodemailer_1 = __importDefault(require("@/plugin/nodemailer"));
const userController = {
    addUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { picture, firstName, lastName, email, password, } = req.body;
        try {
            const md5Password = bcrypt_1.genHash(password);
            const check = yield User_1.default.findOne({ email });
            if (check) {
                res.status(200).json('This e-mail already registered');
            }
            else {
                const addUsers = new User_1.default({
                    picture,
                    firstName,
                    lastName,
                    email,
                    password: md5Password,
                });
                yield addUsers.save();
                res.status(200).json({ addUsers });
            }
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
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
        const { id, picture, firstName, lastName, email } = req.body;
        try {
            const updateUsers = yield User_1.default.findByIdAndUpdate(id, {
                $set: {
                    picture,
                    firstName,
                    lastName,
                    email
                }
            }, { runValidators: true, new: true });
            res.status(200).json({ updateUsers });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield User_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Success');
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    adminSignIn: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = req.user;
        const accessToken = jwt_1.signToken(user);
        res.status(200).json({ accessToken });
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
    }),
    getCurrentUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.status(200).json({ user: req.user });
    }),
    sendEmail: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email } = req.body;
        try {
            const sendmail = yield User_1.default.findOne({ email });
            if (!sendmail)
                res.status(200).json('This is does not existed');
            const randomNumber = Generate_1.genNumber(6);
            yield User_1.default.findByIdAndUpdate(sendmail, {
                $set: {
                    verifyCode: randomNumber
                    //verifyCode:undefined
                }
            }, { runValidators: true, new: true });
            console.log(email);
            sendmail.email.map((email) => {
                nodemailer_1.default.sendMail({
                    from: '108.jobs',
                    to: email,
                    subject: 'VerifyCode from suzuki',
                    text: 'Your verification code is ' + randomNumber
                });
            });
        }
        catch (e) {
            res.status(400).json(e);
        }
    })
};
exports.default = userController;
