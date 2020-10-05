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
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const passport_local_1 = require("passport-local");
const User_1 = __importDefault(require("../model/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const JwtStrategy = passport_jwt_1.default.Strategy;
const ExtractJwt = passport_jwt_1.default.ExtractJwt;
const secret = process.env.JWT_SECRET || 'Khamsone';
//used to serialize the user for the session
passport_1.default.serializeUser((User, done) => {
    done(null, User);
});
//used to deserialize the user
passport_1.default.deserializeUser((id, done) => {
    User_1.default.findById(id, (err, User) => {
        done(err, User);
    });
});
passport_1.default.use('adminSignIn', new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const User = yield User_1.default.findOne({ email });
        if (!User) {
            return done(null, false, { message: 'Incorrect email' });
        }
        const passwordMatch = bcrypt_1.default.compareSync(password, User.password);
        if (!passwordMatch) {
            return done(null, false, { message: 'Incorrect password' });
        }
        done(null, User);
    }
    catch (e) {
        done(e, false);
    }
})));
passport_1.default.use('userSignIn', new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const User = yield User_1.default.findOne({ email });
        if (!User) {
            return done(null, false, { message: 'Incorrect email' });
        }
        const passwordMatch = bcrypt_1.default.compareSync(password, User.password);
        if (!passwordMatch) {
            return done(null, false, { message: 'Incorrect password' });
        }
        done(null, User);
    }
    catch (e) {
        done(e, false);
    }
})));
exports.default = passport_1.default;
