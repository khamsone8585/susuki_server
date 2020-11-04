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
const newPasswordController = {
    showNewPassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getUsers = yield User_1.default.find();
            res.status(200).json({ getUsers });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    // updateNewPassword: async(req: Request, res: Response) =>{
    //     const{
    //         id,
    //         password,
    //         newPassword
    //     }=req.body
    //     try{
    //         const userChange:any = await users.findById(id)
    //         const isMatch = compareHash(password,userChange.password);
    //         if(isMatch){
    //         const md5Password=genHash(newPassword)
    //         const updateUsers = await users.findByIdAndUpdate(id,{
    //             $set:{
    //                 password:md5Password,
    //                 }
    //             },{ runValidators: true, new:true})
    //             res.status(200).json({updateUsers})
    //             }else{
    //                 res.status(400).json('Password Wrong !!!')
    //             }
    //         }catch(e){
    //             res.status(400).json(e)
    //     }
    // },
    changePasswordWhenLogin: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { newPasswords, confirmPasswords } = req.body;
        const { id } = req.params;
        try {
            const isMatch = newPasswords === confirmPasswords;
            if (!isMatch)
                return "Password doesn't match...!";
            const hashedPassword = bcrypt_1.genHash(newPasswords);
            console.log(hashedPassword);
            yield User_1.default.findByIdAndUpdate(id, {
                $set: {
                    password: hashedPassword
                }
            }, { runValidators: true, new: true });
            res.status(200).json('Password has changed');
        }
        catch (e) {
            res.status(400).json(e);
        }
    })
};
exports.default = newPasswordController;
