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
exports.isAuth = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const passport_local_1 = require("passport-local");
const User_1 = __importDefault(require("../model/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const JwtStrategy = passport_jwt_1.default.Strategy;
const ExtractJwt = passport_jwt_1.default.ExtractJwt;
const secret = process.env.JWT_SECRET || 'Khamsone';
// used to serialize the user for the session
passport_1.default.serializeUser(function (user, done) {
    done(null, user._id);
    // where is this user.id going? Are we supposed to access this anywhere?
});
// used to deserialize the user
passport_1.default.deserializeUser(function (id, done) {
    User_1.default.findById(id, function (err, user) {
        done(err, user);
    });
});
passport_1.default.use('adminLogin', new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            return done(null, false, { message: 'Incorrect email' });
        }
        const passwordMatch = bcrypt_1.default.compareSync(password, user.password);
        if (!passwordMatch) {
            return done(null, false, { message: 'Incorrect password' });
        }
        done(null, user);
    }
    catch (e) {
        done(e, false);
    }
})));
passport_1.default.use('isAuth', new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
}, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(payload.sub); // Find the user specified in token
        if (!user) { // If user doesn't exists, handle it
            return done(null, false);
        }
        done(null, user); // Otherwise, return the user
    }
    catch (err) {
        done(err, false);
    }
})));
exports.isAuth = passport_1.default.authenticate('isAuth', { session: false });
exports.default = passport_1.default;
